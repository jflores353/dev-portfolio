import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      jules: file(relativePath: { eq: "jules.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      float: file(relativePath: { eq: "float.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">Gabe Flores</div>
          <div className="side-image left">
            <Img fluid={data.jules.childImageSharp.fluid} />
          </div>
          <div className="main-image">
            <Img fluid={data.headshot.childImageSharp.fluid} />
          </div>
          <div className="side-image right">
            <Img fluid={data.float.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll down</span>
        </div>
      </div>
    </div>
  )
}

export default Banner
