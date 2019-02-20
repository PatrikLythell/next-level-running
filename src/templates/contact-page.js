import React from 'react'
import flat from 'flat'

import Layout from '../layouts'

import Content, { HTMLContent } from '../components/Content'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export class ContactPageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    window.fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => this.setState({ sent: true }))
      .catch(error => alert(error));
  };



  render() {
    const PageContent = this.props.contentComponent || Content
    const meta = {
      title: this.props.meta.title && this.props.meta.title,
      description: this.props.meta.description && this.props.meta.description,
      ogImage: this.props.meta.ogImage && this.props.meta.ogImage
    }
    return (
      <Layout header="" meta={meta}>
        <div className="pt-8 px-4 sm:p-16 md:p-32 mb-4">
          <div className="text-center py-1 pt-6">
            <h1 className="sm:text-big italic font-extrabold break-words leading-none uppercase">
              {this.props.title}
            </h1>
            <PageContent className="content sm:text-2xl md:mb-4 mt-2" content={this.props.intro} />
          </div>
        </div>
        {!this.state.sent ? (
          <h2 className="text-center hidden">Tack så mycket vi hör av oss</h2>
        ) : (
          <form className="p-4 sm:px-16 md:px-32 mb-16"
            name="konsultation"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="konsultation" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
            {this.props.forms && this.props.forms.map((input, i) =>
              <div key={i} className="mb-4">
                <label className="block mb-1 pr-4" htmlFor={input.name}>
                  {input.name}
                </label>
                {input.type === 'textarea'
                  ? <textarea className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-nlr"
                              id={input.name}
                              name={input.name}
                              onChange={this.handleChange}></textarea>
                  : <input className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-nlr"
                           id={input.name}
                           type={input.type}
                           placeholder={input.placeholder}
                           name={input.name}
                            onChange={this.handleChange} />
                }
              </div>
            )}
            <input className="shadow bg-black hover:bg-nlr focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit"/>
          </form>
        )}
      </Layout>
    );
  }
}

const ContactPage = ({ data }) => {

  const { markdownRemark: post } = data

  const ashtml = post.fields.ashtml ? flat.unflatten(JSON.parse(post.fields.ashtml)) : '';

  const meta = {
    title: post.frontmatter.metaTitle && post.frontmatter.metaTitle,
    description: post.frontmatter.metaDescription && post.frontmatter.metaDescription,
    ogImage: post.frontmatter.ogImage && post.frontmatter.ogImage
  }

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      intro={post.frontmatter.intro}
      forms={post.frontmatter.forms}
      ashtml={ashtml}
      meta={meta}
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
        metaTitle
        metaDescription
        ogImage
      }
    }
  }
`
