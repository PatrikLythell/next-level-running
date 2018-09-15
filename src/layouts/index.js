import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";

import Header from '../components/header'
import Footer from '../components/Footer'

const TemplateWrapper = ({ children, header }) => {

  return (
    <div className="font-sans text-md sm:text-lg leading-tight">
      <Helmet
        title="Next Level Running"
        link={[
          { rel: "icon", type:"image/png", sizes:"192x192", href:"/img/favicon.png" }
        ]}
        meta={[
          { name: "description", content: "Next Level Running erbjuder skräddarsydd, effektiv och målinriktad löpcoaching i nära samarbete med Tor Pöllänen - Löpcoach och fd Landslagslöpare." },
          { name: "og:url", content: "https://nextlevelrunning.se" },
          { name: "og:type", content: "website" },
          { name: "og:title", content: "Träna som eliten – Ta din löpning till nästa nivå" },
          { name: "og:description", content: "Next Level Running erbjuder skräddarsydd, effektiv och målinriktad löpcoaching i nära samarbete med Tor Pöllänen - Löpcoach och fd Landslagslöpare." },
          { name: "og:image", content: "https://nextlevelrunning.se/img/og-image.png" },

        ]}
      />
      <Header header={header}/>
        {children}
      <Footer />
    </div>
  )
};

export default TemplateWrapper;

export const layoutQuery = graphql`
  query LayoutQuery {
    blogPosts: allMarkdownRemark(
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
    coaches: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "coach-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            coaches {
              img
              text
              title
              usp
            }
          }
        }
      }
    }
  }
`
