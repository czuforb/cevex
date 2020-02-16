import React from "react"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <section className="w-full | text-center flex flex-col items-center justify-center | bg-orange-300 | hero-bg | h-screen ">
      <div className="flex flex-col items-center my-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          We build roads
        </h1>
        <p className="text-2xl md:text-4xl w-3/4 font-normal leading-normal">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          modi sapiente repellat, rem quae neque?
        </p>
        <Link>
          <button class="py-4 px-10 bg-yellow-400 hover:bg-yellow-500 shadow-2xl hover:shadow-2xl rounded-sm font-bold text-2xl rounded my-10">
            Button
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Hero
