const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const remark = require('remark')
const html = require('remark-html')
const flatten = require('flat')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
              ashtml
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      const templateKey = edge.node.frontmatter.templateKey

      console.log(edge);

      if (templateKey) {
        createPage({
          path: edge.node.fields.slug,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(`src/templates/${String(templateKey)}.js`),
          // additional data can be passed via context
          context: {
            id,
          },
        })
      }
    })
  })
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }

  const { createNodeField } = actions;

  const slug = createFilePath({ node, getNode })

  createNodeField({
    node,
    name: `slug`,
    value: slug,
  })

  let flattened = flatten(node.frontmatter)
  let newArr = _.mapValues(flattened, (val) => {
    remark()
      .use(html)
      .process(val, function (err, createdHTML) {
        val = String(createdHTML)
      })
    return val
  })
  let unFlattened = flatten.unflatten(newArr)

  createNodeField({
    node,
    name: `ashtml`,
    value: JSON.stringify(newArr),
  })
}
