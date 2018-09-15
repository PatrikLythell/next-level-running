import React from 'react'
import flat from 'flat'

import Layout from '../layouts'

import Content, { HTMLContent } from '../components/Content'

export const NLRPageTemplate = ({ title, body, contentComponent, ashtml, meta }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout meta={meta}>
      <div className="pt-8 pb-8 px-4 sm:p-16 md:p-32">
        <div className="text-center py-1 pt-6">
          <h1 className="sm:text-big italic font-extrabold break-words leading-none uppercase">
            {title}
          </h1>
        </div>
        <PageContent className="mt-16 content sm:text-xl nlr-page" content={body} style={{

          }}/>
      </div>
    </Layout>
  )
}

const NLRPage = ({ data }) => {

  const { markdownRemark: post } = data

  const ashtml = post.fields.ashtml ? flat.unflatten(JSON.parse(post.fields.ashtml)) : '';

  const meta = {
    title: post.frontmatter.metaTitle && post.frontmatter.metaTitle,
    description: post.frontmatter.metaDescription && post.frontmatter.metaDescription,
    ogImage: post.frontmatter.ogImage && post.frontmatter.ogImage
  }

  return (
    <NLRPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      body={post.html}
      ashtml={ashtml}
      meta={meta}
    />
  )
}

export default NLRPage

export const nlrPageQuery = graphql`
  query NLRPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
        ashtml
      }
      frontmatter {
        title
        metaTitle
        metaDescription
        ogImage
      }
    }
  }
`
