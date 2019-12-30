import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="outter-work">
      <div className="container">
        <div className="inner-work">
          <div className="content">
            <h3>Here's a few things I've been working on</h3>
          </div>
          <div className="row">
            <div className="project-text">Project 1</div>
            <div className="side-image left">
              <Img fluid={data.headshot.childImageSharp.fluid} />
            </div>
            <div className="project-text">Project 2</div>
            <div className="main-image">
              <Img fluid={data.headshot.childImageSharp.fluid} />
            </div>
            <div className="project-text">Project 3</div>
            <div className="side-image right">
              <Img fluid={data.headshot.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
