import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      video: false
    }
    this.myRef = React.createRef();
  }
  showVideo() {
    let iframe = this.myRef.current
    var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
    if (requestFullScreen) {
      requestFullScreen.bind(iframe)();
    } else {
      this.setState(prevState => ({
        video: true
      }))
    }
  }
  render() {
    const content = this.props.data.indexPage.edges[0].node.frontmatter
    return(
      <Layout header="nlr">
        <div className="pt-16 md:pt-24" style={{
          backgroundColor: '#86E09C',
        }}>
          <div className="z-10 relative text-center px-4">
            <img className="mb-8 md:mb-16 w-64 w-2/5 md:w-1/5" src="/img/NLR_black_small.svg" alt="Next Level Running Logo" />
            <h1 className="text-4xl sm:text-big md:text-huge leading-none font-sans uppercase font-black italic sm:mb-4">{content.title}</h1>
            <h2 className="text-xl sm:text-3xl font-sans uppercase italic mt-2">{content.subtitle}</h2>
            <p className="sm:text-xl text-center font-sans mt-3 sm:w-2/3 mx-auto leading-normal">{content.intro}</p>
          </div>
          <div className="relative md:-mt-24" style={{lineHeight: 0}}>
            <video className="w-full opacity-25 md:-mt-24" src="/img/loop-film.mp4" loop muted playsInline autoPlay></video>
            <div className="absolute w-full pin-t md:-mt-32" style={{
              background: 'linear-gradient(rgba(134, 224, 156, 1), rgba(134, 224, 156, 0) 75%)',
              paddingBottom: '56.50%'
            }}>
              <iframe ref={this.myRef} className={this.state.video ? `absolute pin-t z-20 max-w-full` : ``} allowFullScreen="allowfullscreen" data-v-2945ac6e="" frameBorder="0"  src="https://www.youtube.com/embed/tSXwYJK-fMs?rel=0&amp;controls=0&amp;showinfo=0" width={this.state.video ? '100%' : 0} height={this.state.video ? '100%' : 0} style={{
                transition: 'opacity .5s linear',
                WebkitTransition: 'opacity .5s linear'
              }}></iframe>
            </div>
            <div className="hover:cursor-pointer text-lg md:text-2xl pin-l text-white font-bold italic uppercase absolute text-center w-full" style={{
              top: '40%',
            }} onClick={this.showVideo.bind(this)}>
              <img className="inline-block w-16 md:w-32 mb-4" src="/img/play.svg" alt="Spelaknapp för att starta videon"/>
              <span className="block">Se filmen</span>
            </div>
          </div>
        </div>
        <div className="mt-4 px-4 sm:px-16 md:px-32 py-2 sm:py-3">
          <h3 className="mt-16 mb-8 text-2xl sm:text-4xl italic font-extrabold uppercase text-center">Erbjudanden</h3>
          <div className="xl:flex">
            {
              content.offers && content.offers.map((offer, i) =>
                <Link to={offer.link} className="w-1/2 no-underline">
                  <div className="text-center m-4 bg-center bg-cover flex items-center justify-center"
                       style={{
                         backgroundImage: `url(${offer.img})`,
                         minHeight: '50vh',
                         height: '300px'
                       }}>
                    <h3 className="text-4xl text-white italic font-extrabold uppercase">{offer.title}</h3>
                  </div>
                  <h3 className="text-2xl text-center text-dark italic font-extrabold uppercase">{offer.cta}</h3>
                </Link>
              )
            }
          </div>
          <h3 className="mt-24 mb-8 text-2xl sm:text-4xl italic font-extrabold uppercase text-center">Nyheter</h3>
          <div className="xl:flex -m-2">
            { this.props.data.blogPosts.edges && this.props.data.blogPosts.edges.map((post, i) =>
              <div className="hover:opacity-50 sm:p-2 mb-2" key={i}>
                <a className="text-black no-underline px-6 my-4 rounded block" href={post.node.fields.slug}>
                  <div className="flex flex-col">
                    <h4 className="text-2xl mb-2 uppercase italic font-extrabold leading-none">{post.node.frontmatter.title}</h4>
                    <p className="">{post.node.excerpt}</p>
                    <p className="underline flex-1">Läs mer</p>
                  </div>
                </a>
              </div>
            )}
          </div>
          <div className="mt-8 py-2 sm:py-3 mb-16 text-center">
            <h3 className="mt-8 mb-8 text-2xl sm:text-4xl italic font-extrabold uppercase text-center">Möt våra coacher</h3>
            <Link to="/coacher" className="mb-4 text-dark no-underline">
              <div className="flex flex-wrap content-center">
                { this.props.data.coaches.edges && this.props.data.coaches.edges.map((coach, i) =>
                  coach.node.frontmatter.coaches.map((coach, i) =>
                    <div key={i} className="mt-4 w-1/2 md:w-1/3 lg:w-1/5 hover:opacity-50">
                      <img src={coach.img} className="h-32 w-32" alt=""/>
                      <p className="no-underline">{coach.title}</p>
                    </div>
                )
                )}
              </div>
              <p className="text-center underline mt-4">{content.coachText}</p>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    indexPage: allMarkdownRemark(
      filter: { frontmatter: { id: { eq: "start-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            intro
            coachText
            offers {
              img
              title
              cta
              link
            }
          }
        }
      }
    }
    blogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
      limit: 3
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
