import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";

import Header from '../components/header'
import Footer from '../components/Footer'

const TemplateWrapper = ({ children, header }) => (
  <div className="font-sans text-md sm:text-lg leading-tight">
    <Helmet
      title="Gatsby Starter Tailwind"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header header={header}/>
    {children}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default TemplateWrapper;
