import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts'

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  return(
    <Layout header="nlr">
      <div className="pt-16 md:pt-24" style={{
        backgroundColor: '#86E09C',
      }}>
        <div className="z-10 relative text-center px-4">
          <img className="mb-16 w-64 md:w-1/5" src="/img/NLR_black_small.svg" alt="Next Level Running Logo" />
          <h1 className="text-4xl sm:text-big md:text-huge leading-none font-sans uppercase font-black italic sm:mb-4">Träna som eliten</h1>
          <h2 className="text-xl sm:text-3xl font-sans uppercase italic mt-2">Löpcoaching för dig som vill ta din löpning till nästa nivå</h2>
          <p className="sm:text-xl text-center font-sans mt-3 sm:w-2/3 mx-auto leading-normal">Next Level Running erbjuder skräddarsydd, effektiv och målinriktad löpcoaching av tidigare landslagslöparen Tor Pöllänen och en av Europas just nu bästa distanslöpare David Nilsson.</p>
        </div>
        <div className="relative md:-mt-24">
          <video className="w-full opacity-25 md:-mt-32" src="/img/loop-film.mp4" autoPlay loop muted playsInline></video>
          <div className="absolute w-full pin-t md:-mt-32" style={{
            background: 'linear-gradient(rgba(134, 224, 156, 1), rgba(134, 224, 156, 0) 75%)',
            paddingTop: '45%'
          }}>&nbsp;</div>
          <div className="hover:cursor-pointer text-lg md:text-2xl pin-l text-white font-bold italic uppercase absolute text-center w-full" style={{
            top: '40%',
          }}>
            <img className="inline-block w-16 md:w-32" src="/img/play.svg" alt="Spelaknapp för att starta videon"/>
            <p className="md:mt-3">Se filmen</p>
          </div>
        </div>
      </div>
      <div className="mt-24 px-4 sm:px-16 md:px-32 py-2 sm:py-3 md:flex">
        { edges && edges.map((post, i) =>
          <div className="md:flex-1 hover:opacity-50 mr-6">
            <a className="text-black no-underline" href={post.node.fields.slug}>
              <h4 className="mb-2 uppercase italic font-extrabold">{post.node.frontmatter.title}</h4>
              <p className="">{post.node.excerpt}</p>
              <p className="underline">Läs mer</p>
            </a>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
