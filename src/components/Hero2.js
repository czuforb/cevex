import React from "react"
import { Link } from "gatsby"

const Hero2 = () => {
  return (
    <section className="w-full | text-center flex flex-col items-start justify-center | bg-orange-300 | hero-bg2 | h-screen ">
      <div className="w-1/2 flex flex-col items-start text-left bg-gray-900 text-gray-200 p-24">
        <h1 className="text-xl md:text-6xl font-bold leading-tight mb-8">
          We build roads
        </h1>
        <p className="text-base md:text-xl w-3/4 font-normal leading-normal">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          modi sapiente repellat, rem quae neque?
        </p>
        <Link>
          <button class="py-4 px-10 bg-gray-600 hover:bg-yellow-500 shadow-2xl hover:shadow-2xl rounded-sm font-bold text-2xl rounded my-10">
            Button
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Hero2
