import React from "react"
import Nav from "../components/Nav"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="font-sans antialiased">{children}</main>
      <Contact />
      <Footer />
    </>
  )
}

export default Layout
