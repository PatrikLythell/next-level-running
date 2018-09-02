import React from 'react'
import flat from 'flat'

import Layout from '../layouts'

import Content, { HTMLContent } from '../components/Content'

export const ContactPageTemplate = ({ title, intro, contentComponent, forms, ashtml }) => {
  const PageContent = contentComponent || Content
  console.log(forms);
  return (
    <Layout header="">
      <div className="pt-8 pb-8 px-4 sm:p-16 md:p-32 mb-4 sm:mb-12">
        <div className="text-center py-1 pt-6">
          <h1 className="sm:text-big italic font-extrabold break-words leading-none uppercase">
            {title}
          </h1>
          <PageContent className="content sm:text-2xl md:mb-4 mt-2" content={intro} />
        </div>
      </div>
      <form className="p-4 sm:px-16 md:px-32" method="POST" name="konsultation" action="tack" data-netlify="true">
        {forms && forms.map((input, i) =>
          <div key={i} className="mb-4">
            <label className="block mb-1 pr-4" htmlFor={input.name}>
              {input.name}
            </label>
            {input.type === 'textarea'
              ? <textarea className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-nlr" id={input.name}></textarea>
              : <input className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-nlr" id={input.name} type={input.type} placeholder={input.placeholder} />
            }
          </div>
        )}
        <input className="shadow bg-black hover:bg-nlr focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit"/>
      </form>
    </Layout>
  )
}

const ContactPage = ({ data }) => {

  const { markdownRemark: post } = data

  const ashtml = post.fields.ashtml ? flat.unflatten(JSON.parse(post.fields.ashtml)) : '';

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      intro={post.frontmatter.intro}
      forms={post.frontmatter.forms}
      ashtml={ashtml}
    />
  )
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
        ashtml
      }
      frontmatter {
        title
        intro
        forms {
          name
          placeholder
          type
        }
      }
    }
  }
`
