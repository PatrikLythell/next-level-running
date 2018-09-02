import React from 'react'
import flat from 'flat'

import Layout from '../layouts'

import Content, { HTMLContent } from '../components/Content'

export const CoachPageTemplate = ({ title, intro, contentComponent, coaches, ashtml }) => {
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
        {coaches && coaches.map((coach, i) =>
          <Coach coach={coach} ashtml={ashtml.coaches && ashtml.coaches[i]} key={i} />
        )}
      </div>
    </Layout>
  )
}

const Coach = ({ coach: { img, text, title, usp }, ashtml }) => {
  return (
    <div className="md:flex mb-16">
      <div className="md:w-1/3 pr-8">
        <img src={img} alt={`Bild på vår coach ${title}`} className="w-full"/>
      </div>
      <div className="md:w-2/3">
        <h2 className="sm:text-5xl italic font-extrabold break-words leading-none mb-3 mt-6 uppercase">{title}</h2>
        <h4 className="sm:text-2xl italic font-extrabold break-words leading-none mb-3 uppercase">{usp}</h4>
        <div dangerouslySetInnerHTML={{ __html: ashtml.text }}></div>
      </div>
    </div>
  )
}

const CoachPage = ({ data }) => {

  const { markdownRemark: post } = data

  const ashtml = post.fields.ashtml ? flat.unflatten(JSON.parse(post.fields.ashtml)) : '';

  return (
    <CoachPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      intro={post.frontmatter.intro}
      coaches={post.frontmatter.coaches}
      ashtml={ashtml}
    />
  )
}

export default CoachPage

export const coachPageQuery = graphql`
  query CoachPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
        ashtml
      }
      frontmatter {
        title
        intro
        coaches {
          img
          text
          title
          usp
        }
      }
    }
  }
`
