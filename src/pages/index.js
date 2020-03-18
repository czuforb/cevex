import React from "react"
import "../styles/style.css"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import FeaturedProjects from "../components/FeaturedProjects"
import Testimonials from "../components/Testimonials"

import "animate.css/animate.min.css"
function Index() {
  return (
    <Layout>
      <Hero />
      <Feature />
      <Testimonials />
    </Layout>
  )
}

export default Index
