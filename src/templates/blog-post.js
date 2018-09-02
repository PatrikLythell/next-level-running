import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import PageContent, { HTMLContent } from '../components/Content'
import Layout from '../layouts'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || PageContent
  return (
    <Layout>
      {helmet || ''}
      <div className="p-4 sm:p-16 md:p-32">
        <div className="py-1 font-light">
          <h1 className="sm:text-big italic font-extrabold break-words leading-none">
            {title}
          </h1>
        </div>
        <h2 className="mt-6 uppercase italic">{description}</h2>
        <HTMLContent className="content mt-4 w-3/4 sm:text-xl" content={content} />
      </div>
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      title={post.frontmatter.title}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
