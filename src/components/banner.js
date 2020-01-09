import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
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
    <div className="banner" id="home">
      <div className="container">
        <div className="row">
          <div className="main-text">Gabe Flores</div>

          <div className="main-image">
            <Img fluid={data.headshot.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
