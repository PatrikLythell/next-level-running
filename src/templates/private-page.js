import React from 'react'

import Layout from '../layouts'

import Content, { HTMLContent } from '../components/Content'
import TextAndList from '../components/TextAndList'
import BigBoxes from '../components/BigBoxes'

export const PrivatePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <div className="">
        <h2 className="">
          {title}
        </h2>
        <PageContent className="content" content={content} />
        <TextAndList list={['hello', 'to', 'you']} />
        <BigBoxes boxes={['box', 'box']}/>
        <Media />
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

const Media = ({img, title, body, cta, link}) => {
  return(
    <div className="mr-5 my-5 w-1/3">
      {img &&
        <img src={img.src || ''} alt={img.alt || ''}/>
      }
      <h4 className="uppercase italic text-2xl">{title || 'title'}</h4>
      <p>{body || 'body'}</p>
      {link &&
        <a href={link}>{cta || 'cta'}</a>
      }
    </div>
  )
}

const SmallPresentation = ({img, name, usp}) => {
  return (
    <div className="my-5 w-1/3 text-center">
      {img &&
        <img src={img.src || ''} alt={img.alt || ''} className="rounded-full" />
      }
      <h4 className="uppercase italic text-2xl">{name || 'Name'}</h4>
      <p>{usp || 'USP'}</p>
    </div>
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
