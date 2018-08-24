import React from 'react'
import flat from 'flat'

import Layout from '../layouts'

import Content, { HTMLContent } from '../components/Content'
import TextAndList from '../components/TextAndList'
import BigBoxes from '../components/BigBoxes'

export const NLRPageTemplate = ({ title, body, contentComponent, ashtml }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <div className="p-4 sm:p-16 md:p-32">
        <div className="max-w-5/6 md:w-3/5 py-1 pt-6">
          <h1 className="sm:text-5xl italic font-extrabold break-words leading-none mb-3 mt-6 uppercase">
            {title}
          </h1>
          <PageContent className="content" content={body} />
        </div>
      </div>
    </Layout>
  )
}

const NLRPage = ({ data }) => {

  const { markdownRemark: post } = data

  const ashtml = post.fields.ashtml ? flat.unflatten(JSON.parse(post.fields.ashtml)) : '';

  return (
    <NLRPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      body={post.html}
      ashtml={ashtml}
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
      }
    }
  }
`
