import React from 'react'
import Content, { HTMLContent } from '../components/Content'

export const NlrPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="">
      <div className="">
        <h2 className="">
          {title}
        </h2>
        <PageContent className="content" content={content} />
      </div>
    </section>
  )
}

const NlrPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <NlrPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

export default NlrPage

export const nlrPageQuery = graphql`
  query NlrPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
