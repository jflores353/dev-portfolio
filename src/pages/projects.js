import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Header from "../components/header"
import Footer from "../components/footer"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      movie: file(relativePath: { eq: "movie.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="outter-project">
      <Header />
      <div className="container">
        <div className="inner-project">
          <div className="heading">
            <h2>Here's a few projects I've been working on</h2>
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
                <h3>Project 2</h3>
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
                <Img fluid={data.movie.childImageSharp.fluid} />
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
      </div>
      <Footer />
    </div>
  )
}

export default Projects
