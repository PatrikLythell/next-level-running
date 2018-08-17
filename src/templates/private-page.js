import React from 'react'

import Layout from '../layouts'

import Content, { HTMLContent } from '../components/Content'

export const PrivatePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <div className="">
        <h2 className="">
          {title}
        </h2>
        <PageContent className="content" content={content} />
      </div>
    </Layout>
  )
}

const PrivatePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PrivatePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

export default PrivatePage

export const privatePageQuery = graphql`
  query PrivatePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
