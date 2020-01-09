import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "react-scroll"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dctf: file(relativePath: { eq: "dream.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aca: file(relativePath: { eq: "aca.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about-bio" id="about">
      <div className="container">
        <div className="inner-bio">
          <div className="content">
            <h3>A little about me...</h3>
            <p>
              Currently I am tutoring students at Austin Coding Academy that are
              on the same JavaScript track that I completed in the Spring of
              2019. I enjoy studying and keeping up with the new trends in the
              development world by creating small projects with what I learn.
              <br />
              <br />
              You can catch me on the soccer field pretty much all year. I'm
              inspired by all cultures through their cuisines and love to
              adventure in cooking at home with new recipes and ingredients.
              Also, as you know I'm from Central Texas so of course I know my
              way around a bbq smoker. I dabble a little into woodworking and
              art as well.
              <br />
              <br />
              My journey into the development world would not have been possible
              without the support I have received from the{" "}
              <a href="https://www.dctf-austin.org/single-post/2019/07/30/Gabe-Flores-Dream-Achiever">
                Dream Come True Foundation.
              </a>
              &nbsp; After submitting an application along with sharing a
              written story of my life thus far and interviewing before the
              foundation's board members, I was granted full scholarship to
              attend{" "}
              <a href="https://austincodingacademy.com/">
                Austin Coding Academy
              </a>
              . &nbsp; I completed their FullStack JavaScript track in April
              2019. I will be forever grateful!
            </p>
            <div className="logos">
              <div className="dctf-image">
                <a href="https://www.dctf-austin.org/single-post/2019/07/30/Gabe-Flores-Dream-Achiever">
                  <Img fluid={data.dctf.childImageSharp.fluid} />
                </a>
              </div>
              <div className="aca-image">
                <a href="https://austincodingacademy.com/">
                  <Img fluid={data.aca.childImageSharp.fluid} />
                </a>
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
                Back to the top
              </Link>
            </div>
          </div>
          <div className="bio-image">
            <Img fluid={data.headshot.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
