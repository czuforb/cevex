import React from "react"
import { Link } from "gatsby"
import heroBackground from "../../static/hero-background.png"

const Hero = () => {
  return (
    <section className="w-full | text-center flex flex-col items-start justify-center  h-screen ">
      <img
        src={heroBackground}
        alt="Hero"
        className="absolute w-full h-screen object-cover"
      />
      <div className="z-10 flex flex-col text-left bg-transparent lg:bg-blue-900 lg:w-1/2 mt-10 lg:mt-10 py-20 lg:py-24">
        <div className="w-3/4 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Cevex is a<span className="text-yellow-500"> road making </span>
            company in the eastern region.
          </h1>
          <p className="text-xl md:text-2xl lg:text-gray-100 font-normal leading-normal my-4">
            Our company builds roads and design infrastucture with more than 20
            years experience in the industry.
          </p>
          <Link to="#contact">
            <button class="py-4 px-10 bg-yellow-400 hover:bg-yellow-500 shadow-2xl hover:shadow-2xl rounded-sm font-bold text-2xl rounded my-10">
              Get in touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
