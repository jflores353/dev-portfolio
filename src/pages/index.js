import React from "react"
import "../styles/styles.scss"

//Import Components
import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
