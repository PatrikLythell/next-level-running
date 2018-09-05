import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../layouts'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      video: false
    }
  }
  showVideo() {
    this.setState(prevState => ({
      video: true
    }))
  }
  render() {
    return(
      <Layout header="nlr">
        <div className="pt-16 md:pt-24" style={{
          backgroundColor: '#86E09C',
        }}>
          <div className="z-10 relative text-center px-4">
            <img className="mb-8 md:mb-16 w-64 w-2/5 md:w-1/5" src="/img/NLR_black_small.svg" alt="Next Level Running Logo" />
            <h1 className="text-4xl sm:text-big md:text-huge leading-none font-sans uppercase font-black italic sm:mb-4">Träna som eliten</h1>
            <h2 className="text-xl sm:text-3xl font-sans uppercase italic mt-2">Löpcoaching för dig som vill ta din löpning till nästa nivå</h2>
            <p className="sm:text-xl text-center font-sans mt-3 sm:w-2/3 mx-auto leading-normal">Next Level Running erbjuder skräddarsydd, effektiv och målinriktad löpcoaching av tidigare landslagslöparen Tor Pöllänen och en av Europas just nu bästa distanslöpare David Nilsson.</p>
          </div>
          <div className="relative md:-mt-24">
            <video className="w-full opacity-25 md:-mt-32" src="/img/loop-film.mp4" loop muted playsInline></video>
            <div className="absolute w-full pin-t md:-mt-32" style={{
              background: 'linear-gradient(rgba(134, 224, 156, 1), rgba(134, 224, 156, 0) 75%)',
              paddingBottom: '56.50%'
            }}>
              <iframe className={`absolute pin-t w-full h-full opacity-0 ${this.state.video ? 'z-10 opacity-100 block' : 'hidden'}`} allowFullScreen="allowfullscreen" data-v-2945ac6e="" frameBorder="0"  src="https://www.youtube.com/embed/tSXwYJK-fMs?rel=0&amp;controls=0&amp;showinfo=0" width="560" height="349" style={{
                transition: 'opacity .5s linear',
                WebkitTransition: 'opacity .5s linear'
              }}></iframe>
            </div>
            <div className="hover:cursor-pointer text-lg md:text-2xl pin-l text-white font-bold italic uppercase absolute text-center w-full" style={{
              top: '40%',
            }} onClick={this.showVideo.bind(this)}>
              <img className="inline-block w-16 md:w-32" src="/img/play.svg" alt="Spelaknapp för att starta videon"/>
              <p className="md:mt-3">Se filmen</p>
            </div>
          </div>
        </div>
        <div className="mt-8 px-4 sm:px-16 md:px-32 py-2 sm:py-3">
          {/* <h2 className="pl-2 sm:text-2xl font-sans uppercase italic mt-2 flex-3">Just Nu!</h2> */}
          <div className="xl:flex">
            { this.props.data.allMarkdownRemark.edges && this.props.data.allMarkdownRemark.edges.map((post, i) =>
              <div className="hover:opacity-50 p-2" key={i}>
                <a className="text-black no-underline p-6 border rounded block" href={post.node.fields.slug}>
                  <h4 className="text-2xl mb-2 uppercase italic font-extrabold leading-none">{post.node.frontmatter.title}</h4>
                  <p className="">{post.node.excerpt}</p>
                  <p className="underline">Läs mer</p>
                </a>
              </div>
            )}
          </div>
        </div>
      </Layout>
    )
  }
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
