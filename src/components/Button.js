import React from "react"
import { Link } from "gatsby"

const Button = () => {
  return (
    <Link className="block mt-8" to="/about">
      <button className="text-xl py-4 px-6 bg-yllw-00 hover:bg-yellow-300 shadow-xl hover:shadow-2xl rounded font-bold transition-all duration-150 ease-in">
        Read our story
      </button>
    </Link>
  )
}

export default Button
