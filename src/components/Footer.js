import React from "react"
import { Link } from "gatsby"
import euBadge from "../imgs/EU_kohezios_logo.jpg"

const Footer = () => {
  return (
    <footer className="bg-bl-00 w-full p-4">
      <div className="w-full mx-auto md:max-w-screen-md lg:max-w-screen-xl flex flex-col  lg:flex-row flex-wrap">
        <div className="w-full md:w-1/4 my-6">
          <Link to="/" className="w-1/2">
            <h1 className="font-display text-2xl font-bold text-gray-400">
              Cevex
              <span className="w-1/6 border-b border-gray-200 block mx-1 my-2 opacity-50"></span>
            </h1>
          </Link>
          <p className="lg:w-3/4 my-4 leading-relaxed text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            consectetur, eligendi omnis voluptatibus est deleniti unde dolore
            molestias cumque doloremque!
          </p>
        </div>
        <div className="w-full md:w-1/4 my-6">
          <h3 className="font-display text-xl font-bold text-gray-400">
            Information
            <span className="w-1/6 border-b border-gray-200 block mx-1 my-2 opacity-50"></span>
          </h3>
          <ul>
            <li>
              <Link
                className="font-medium text-lg hover:text-blue-400 text-gray-100"
                to="/"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-lg hover:text-blue-400 text-gray-100"
                to="/"
              >
                References
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-lg hover:text-blue-400 text-gray-100"
                to="/"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-lg hover:text-blue-400 text-gray-100"
                to="/"
              >
                Cégadatbázis
              </Link>
            </li>
          </ul>
        </div>
        <div className="rounded w-1/4 my-6">
          <h3 className="font-display text-xl font-bold text-gray-400">
            Services
            <span className="w-1/6 border-b border-gray-200 block mx-1 my-2 opacity-50"></span>
          </h3>
          <ul>
            <li>
              <Link
                className="font-medium text-lg hover:text-blue-400 text-gray-100"
                to="/references"
              >
                Road building
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-lg hover:text-blue-400 text-gray-100"
                to="/references"
              >
                Civil Engineering
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-lg hover:text-blue-400 text-gray-100"
                to="/references"
              >
                Landwork
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-lg hover:text-blue-400 text-gray-100"
                to="/references"
              >
                Other infrastucture
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/3 lg:w-1/4 my-6">
          <img className="w-3/4 h-3/4" src={euBadge} alt="Szécheny 2020"></img>
        </div>
        <div className="opacity-50 pt-4 mt-4 text-gray-300 border-t border-gray-400 text-center w-full  mx-auto">
          © 2020 Cevex
        </div>
      </div>
    </footer>
  )
}

export default Footer
