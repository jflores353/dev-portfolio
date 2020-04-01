import React from "react"

// Socials
import github from "../images/github-large.png"
import linkedin from "../images/linkedin-large.png"

const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <span>© 2019 Gabe Flores</span>
        <div className="socials">
          <a href="https://github.com/jflores353">
            <img src={github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/gabe-flores21/">
            <img src={linkedin} alt="Linkedin" />
          </a>
        </div>
        <span>gabefloresdev@gmail.com</span>
      </div>
    </footer>
  )
}

export default Footer
