import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";

import Header from '../components/header'

const TemplateWrapper = ({ children }) => (
  <div className="font-sans text-l sm:text-xl leading-normal">
    <Helmet
      title="Gatsby Starter Tailwind"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    {children}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default TemplateWrapper;
