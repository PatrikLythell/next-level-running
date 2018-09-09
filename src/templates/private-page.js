import React from 'react'
import flat from 'flat'

import Layout from '../layouts'

import Content, { HTMLContent } from '../components/Content'
import TextAndList from '../components/TextAndList'

export const PrivatePageTemplate = ({ title, intro, contentComponent, offers, ashtml }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout header="nlr">
      <div className="bg-nlr pt-8 pb-8 px-4 sm:p-16 md:p-32 mb-4 sm:mb-12">
        <div className="text-center py-1 pt-6">
          <h1 className="sm:text-big italic font-extrabold break-words leading-none uppercase">
            {title}
          </h1>
          <PageContent className="content sm:text-2xl md:mb-4 mt-2" content={intro} />
        </div>
      </div>
      <div className="p-4 sm:px-16 md:px-32">
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
          img
        }
      }
    }
  }
`
