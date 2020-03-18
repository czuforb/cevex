import React from "react"
import { Link } from "gatsby"
import heroBackground from "../../static/backgrounds/hero-background.png"

const Hero = () => {
  return (
    <section className="w-full h-screen bg-bl-00 relative">
      <img
        src={heroBackground}
        alt="Hero"
        className="z-0 w-full h-screen  lg:w-1/2 absolute inset-y-0 right-0"
      />
      <div className="flex flex-col justify-center w-11/12 lg:w-1/2 h-auto mx-4 md:mx-8 mt-48 sm:mt-64 lg:mt-64 lg:ml-40 absolute bg-gray-100 z-10 rounded py-12 px-4">
        <h1 className="text-5xl md:text-6xl cl-bl-00 font-bold leading-tight">
          Cevex is a<span className="cl-yllw-00"> road making </span>
          company in the eastern region.
        </h1>
        <p className="cl-bl-00 text-lg md:text-2xl font-normal leading-normal mt-2 leading-loose">
          Our company builds roads and design infrastucture with more than 20
          years experience in the industry.
        </p>
        <div className="mt-8 lg:mt-1 flex">
          <Link to="#contact">
            <button class="text-gray-900 py-4 px-10 bg-yllw-00 hover:bg-yellow-500 shadow-xl hover:shadow-2xl rounded-sm font-bold text-2xl rounded lg:my-10">
              Get in touch
            </button>
          </Link>
          <Link to="/references">
            <button class="text-gray-900 ml-4 md:mt-0 md:ml-6 py-4 px-10 bg-gray-300 hover:bg-gray-400 shadow-xl hover:shadow-2xl rounded-sm font-bold text-2xl rounded lg:my-10">
              References
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 mb-10 w-full z-50">
        <svg
          className="scrolldown stroke-0 mx-auto text-gray-100 fill-current stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
        >
          <path
            class="heroicon-ui"
            d="M11 18.59V3a1 1 0 0 1 2 0v15.59l5.3-5.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 1.4-1.42l5.3 5.3z"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
