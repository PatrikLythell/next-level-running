import React from 'react'
import flat from 'flat'

import Layout from '../layouts'

import Content, { HTMLContent } from '../components/Content'
import TextAndList from '../components/TextAndList'
import BigBoxes from '../components/BigBoxes'

export const PrivatePageTemplate = ({ title, intro, contentComponent, offers, ashtml }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout header="">
      <div className="p-4 sm:p-16 md:p-32">
        <div className="text-center py-1 pt-6 font-light">
          <h1 className="sm:text-big italic font-extrabold break-words leading-none mb-3 mt-6">
            {title}
          </h1>
          <PageContent className="content sm:text-2xl" content={intro} />
        </div>
      </div>
      <div className="p-4 sm:p-16 md:p-32">
        {offers && offers.map((offer, i) =>
          <TextAndList list={offer} ashtml={ashtml.offers && ashtml.offers[i]} key={i} />
        )}
      </div>
    </Layout>
  )
}

const PrivatePage = ({ data }) => {

  const { markdownRemark: post } = data

  const ashtml = post.fields.ashtml ? flat.unflatten(JSON.parse(post.fields.ashtml)) : '';

  return (
    <PrivatePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      intro={post.frontmatter.intro}
      offers={post.frontmatter.offers}
      ashtml={ashtml}
    />
  )
}

export default PrivatePage

export const privatePageQuery = graphql`
  query PrivatePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
        ashtml
      }
      frontmatter {
        title
        intro
        offers {
          title
          body
          price
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
