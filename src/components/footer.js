import React from "react"

// Socials
import twitter from "../images/twitter.png"
import instagram from "../images/instagram.png"
import linkedin from "../images/linkedin.png"

const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <span>© 2019 Gabe Flores</span>
        <div className="socials">
          <a href="https://twitter.com/CoconutMexican">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/joegabe.flores/?hl=en">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.instagram.com/joegabe.flores/?hl=en">
            <img src={linkedin} alt="Linkedin" />
          </a>
        </div>
        <span>gabefloresdev@gmail.com</span>
      </div>
    </footer>
  )
}

export default Footer
