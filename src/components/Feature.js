import React from "react"
import { Link } from "gatsby"
import Button from "./Button"

const Feature = () => {
  return (
    <section className="w-full h-auto flex flex-col md:flex-row flex-1">
      <div className="w-full lg:w-1/2 bg-bl-00 py-12 px-4 flex justify-center items-center">
        <h2 className="text-center text-5xl md:text-6xl font-bold text-gray-100">
          We are <span className="cl-yllw-00">building</span> in the industry
          for <span className="cl-yllw-00">more than 20 years</span>.
        </h2>
      </div>
      <div className="w-full lg:w-1/2 px-6 py-12">
        <h2 className="font-display text-2xl font-bold mb-12">About us</h2>
        <p className="text-xl leading-loose">
          Our company has been involved in domestic construction design and
          construction since 1998 in various forms of company. The Company
          mainly carries out its construction activities in Borsod and Heves
          counties. Our headquarters are in Miskolc and our sites are in Edelény
          and Tard. In line with the increased demands, we strive to use
          state-of-the-art technologies in our work and to always comply with
          environmental and safety regulations.
        </p>
        <Button />
      </div>
    </section>
  )
}

export default Feature
