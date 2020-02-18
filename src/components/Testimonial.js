import React from "react"

const Testimonial = ({ img, name, quote }) => {
  return (
    <div className="w-full md:w-8/12 lg:w-1/3 h-auto bg-gray-200 flex flex-col lg:flex-row items-center m-4 p-6 shadow-xl">
      <img className="w-30 h-30 mr-4" src={img} alt="John Fernando" />
      <p className="m-4">
        {quote}
        <h3 className="mx-4 font-bold mt-4 ml-auto">{name}</h3>
      </p>
    </div>
  )
}

export default Testimonial
