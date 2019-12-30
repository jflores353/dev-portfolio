import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Header from "../components/header"

const WorkPage = () => {
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
    <div className="work-page">
      <Header />
      <div className="container">
        <div className="inner-work">
          <div className="content">
            <h2>A few of my Projects</h2>
            <div className="title">
              <h3>First Project</h3>
              <p> Brief description of first Project.</p>
            </div>
            <div className="title">
              <h3>Second Project</h3>
              <p> Brief description of Second Project.</p>
            </div>
            <div className="title">
              <h3>Third Project</h3>
              <p> Brief description of third Project.</p>
            </div>
          </div>
          <div className="work-images">
            <div className="side-image top">
              <Img fluid={data.headshot.childImageSharp.fluid} />
            </div>
            <div className="side-image mid">
              <Img fluid={data.headshot.childImageSharp.fluid} />
            </div>
            <div className="side-image bottom">
              <Img fluid={data.headshot.childImageSharp.fluid} />
            </div>
          </div>
          <div className="btn-row">
            <Link to="/work">Back to the top</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkPage
