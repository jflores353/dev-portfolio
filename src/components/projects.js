import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "react-scroll"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      movie: file(relativePath: { eq: "movie.png" }) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      trivia: file(relativePath: { eq: "trivia.png" }) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      ecommerce: file(relativePath: { eq: "ecommerce.png" }) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="outter-project" id="projects">
      <div className="container">
        <div className="inner-project">
          <div className="heading">
            <h2>Here are a few projects I've been working on</h2>
          </div>
          <div className="project-list">
            <div className="project top">
              <div className="project-title">
                <h3>React Movie Database</h3>

                <p>
                  A movie database application built with ReactJS that fetches
                  films from themoviedb's API. The user interface for this
                  application uses complex animations that enhance the visual
                  experience when transitioning to the subpage for each
                  individual movie's detail. Once a movie is selected, the url
                  is flexible and you can simply change the last digit to
                  randomly load another movie. Try it out.
                </p>
              </div>
              <div className="side-image top">
                <a href="https://gabe-flores-react-movie-app.netlify.com/?_ga=2.209401818.973105688.1577677782-1197763297.1576646413">
                  <Img fluid={data.movie.childImageSharp.fluid} />
                </a>
              </div>
            </div>
            <div className="project mid">
              <div className="project-title">
                <h3>React Trivia Game</h3>

                <p>
                  A fullstack quiz application built with ReactJS on the
                  frontend and Google's Firebase for the backend. Uses the
                  OpenTrivia Database API to retrieve questions and then allows
                  users to store their scores at the end of each game into
                  Firebase's storage. Play a quick round and try to make it to
                  the top of the High Scores.
                </p>
              </div>
              <div className="side-image mid">
                <a href="https://trivia-top-ten.netlify.com/">
                  <Img fluid={data.trivia.childImageSharp.fluid} />
                </a>
              </div>
            </div>
            <div className="project bottom">
              <div className="project-title">
                <h3>Gatsby-Shopify Ecommerce</h3>

                <p>
                  An Ecommerce web app built with the blazing fast GatsbyJS
                  framework on the frontend and Shopify's developer API. Add an
                  item to the cart, proceed to checkout and you will be sent to
                  Shopify's checkout page. You can process a mock order using
                  any customer info and just make sure to place only a "1" for
                  the credit card number. Even add coupon code "Gabe" for a
                  small discount!
                </p>
              </div>
              <div className="side-image bottom">
                <a href="https://gatsby-shopify-ecommerce.netlify.com">
                  <Img fluid={data.ecommerce.childImageSharp.fluid} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-row">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Back To The Top
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
