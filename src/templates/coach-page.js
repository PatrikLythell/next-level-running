import React from 'react'
import Content, { HTMLContent } from '../components/Content'

export const CoachPageTemplate = ({ title, content, contentComponent }) => {
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

const CoachPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <CoachPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

export default CoachPage

export const coachPageQuery = graphql`
  query CoachPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
