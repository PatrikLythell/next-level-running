import React from 'react'

import Layout from '../layouts'

import Content, { HTMLContent } from '../components/Content'
import TextAndList from '../components/TextAndList'
import BigBoxes from '../components/BigBoxes'

export const ForetagPageTemplate = ({ title, intro, contentComponent, offers }) => {
  const PageContent = contentComponent || Content

  console.log(offers[0]);

  return (
    <Layout>
      <div className="w-2/3">
        <h1 className="text-5xl italic">
          {title}
        </h1>
        <PageContent className="content" content={intro} />
      </div>
      {offers && offers.map((offer, i) =>
        <TextAndList list={offer} key={i} />
      )}
    </Layout>
  )
}

const ForetagPage = ({ data }) => {
  console.log(data);

  const { markdownRemark: post } = data

  return (
    <ForetagPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      intro={post.frontmatter.intro}
      offers={post.frontmatter.offers}
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
        intro
        offers {
          title
          price
          body
          usps {
            title
            body
          }
          cta
        }
      }
    }
  }
`
