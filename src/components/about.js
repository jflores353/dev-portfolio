import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

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
    }
  `)
  return (
    <div className="about-bio">
      <div className="container">
        <div className="inner-bio">
          <div className="content">
            <h3>A little about me...</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Facilisis gravida neque convallis a cras semper auctor. Quisque
              sagittis purus sit amet volutpat consequat. Mattis ullamcorper
              velit sed ullamcorper morbi tincidunt ornare massa. Consequat id
              porta nibh venenatis cras sed felis eget velit. Velit ut tortor
              pretium viverra suspendisse potenti. Tellus pellentesque eu
              tincidunt tortor aliquam nulla facilisi cras fermentum. Risus
              ultricies tristique nulla aliquet enim tortor. Eu nisl nunc mi
              ipsum faucibus vitae aliquet nec. Faucibus vitae aliquet nec
              ullamcorper sit. Ut etiam sit amet nisl purus in mollis.
            </p>
            <div className="btn-row">
              <Link to="/">Back to the top</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
