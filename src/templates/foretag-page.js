import React from 'react'
import Content, { HTMLContent } from '../components/Content'

export const ForetagPageTemplate = ({ title, content, contentComponent }) => {
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

const ForetagPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ForetagPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

export default ForetagPage

export const foretagPageQuery = graphql`
  query ForetagPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
