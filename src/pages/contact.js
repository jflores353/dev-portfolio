import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Header from "../components/header"

const ContactPage = () => {
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
    <div className="bio-header">
      <Header />
      <div className="about-bio">
        <div className="container">
          <div className="inner-bio">
            <div className="content">
              <h3>Contact me</h3>
              <p>Form will go here.</p>
            </div>
          </div>
          <div className="main-image">
            <Img fluid={data.headshot.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
