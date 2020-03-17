import React from "react"
import Nav from "../components/Nav"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Nav className="antialiased" />
      <main className="font-body antialiased">{children}</main>
      <Contact className="font-body antialiased" />
      <Footer className="font-body antialiased" />
    </>
  )
}

export default Layout
