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
                <h3>React Movie App</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Facilisis gravida neque convallis a cras semper auctor.
                  Quisque sagittis purus sit amet volutpat consequat. Mattis
                  ullamcorper velit sed ullamcorper morbi tincidunt ornare
                  massa.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Facilisis gravida neque convallis a cras semper auctor.
                  Quisque sagittis purus sit amet volutpat consequat. Mattis
                  ullamcorper velit sed ullamcorper morbi tincidunt ornare
                  massa.
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
                <h3>Project 3</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Facilisis gravida neque convallis a cras semper auctor.
                  Quisque sagittis purus sit amet volutpat consequat. Mattis
                  ullamcorper velit sed ullamcorper morbi tincidunt ornare
                  massa.
                </p>
              </div>
              <div className="side-image bottom">
                <Img fluid={data.movie.childImageSharp.fluid} />
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
