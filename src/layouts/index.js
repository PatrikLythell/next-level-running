import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";

import Header from '../components/header'
import Footer from '../components/Footer'

const TemplateWrapper = ({ children, header, meta }) => {

  return (
    <div className="font-sans text-md sm:text-lg leading-tight">
      <Helmet
        title={meta.title || 'Next Level Running - Träna som Eliten'}
        link={[
          { rel: "icon", type:"image/png", sizes:"192x192", href:"/img/favicon.png" }
        ]}
        meta={[
          { name: "description", content: meta.description || "Next Level Running erbjuder skräddarsydd, effektiv och målinriktad löpcoaching i nära samarbete med Tor Pöllänen - Löpcoach och fd Landslagslöpare." },
          { name: "og:url", content: "https://nextlevelrunning.se" },
          { name: "og:type", content: "website" },
          { name: "og:title", content: meta.title || "Träna som eliten – Ta din löpning till nästa nivå" },
          { name: "og:description", content: meta.description || "Next Level Running erbjuder skräddarsydd, effektiv och målinriktad löpcoaching i nära samarbete med Tor Pöllänen - Löpcoach och fd Landslagslöpare." },
          { name: "og:image", content: `https://nextlevelrunning.se${meta.ogImage}` || "https://nextlevelrunning.se/img/og-image.png" },

        ]}
      />
      <Header header={header}/>
        {children}
      <Footer />
    </div>
  )
};

export default TemplateWrapper;
