import React from "react"
import { Link } from "gatsby"
import heroBackground from "../../static/backgrounds/hero-background.png"

const Hero = () => {
  return (
    <div className="w-full bg-bl-00 h-screen">
      <section className="font-display w-full h-screen | text-center flex flex-col ml-40 justify-center">
        <img
          src={heroBackground}
          alt="Hero"
          className="absolute top-0 right-0 object-cover w-1/2 h-screen"
        />
        <div className="rounded py-6 z-10 flex flex-col text-left w-full bg-gray-100 shadow-lg lg:w-1/2">
          <div className="w-10/12 mx-auto">
            <h1 className="text-4xl md:text-5xl cl-bl-00 font-bold leading-tight">
              Cevex is a<span className="cl-yllw-00"> road making </span>
              company in the eastern region.
            </h1>
            <p className="cl-bl-00 text-xl md:text-2xl font-normal leading-normal my-4">
              Our company builds roads and design infrastucture with more than
              20 years experience in the industry.
            </p>
            <div className="flex">
              <Link to="#contact">
                <button class="text-gray-900 py-4 px-10 bg-yllw-00 hover:bg-yellow-500 shadow-xl hover:shadow-2xl rounded-sm font-bold text-2xl rounded my-10">
                  Get in touch
                </button>
              </Link>
              <Link to="/references">
                <button class="text-gray-900 ml-6 py-4 px-10 bg-gray-300 hover:bg-gray-400 shadow-xl hover:shadow-2xl rounded-sm font-bold text-2xl rounded my-10">
                  See references
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  )
}

export default Hero
