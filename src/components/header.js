// import { Link } from "gatsby"
import { Link } from "react-scroll"

import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">Welcome</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={75}
              duration={500}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={75}
              duration={500}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="email-form"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
