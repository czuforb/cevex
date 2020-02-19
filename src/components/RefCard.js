import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const RefCard = ({ title, slug, img, type }) => {
  return (
    <Link
      to={slug}
      className="group w-10/12 md:w-1/3 lg:w-1/4 relative w-auto h-auto flex flex-col mb-8 px-3 mx-auto shadow-xl hover:shadow-2xl "
    >
      <p className="absolute top-0 right-0 p-2 mr-8 mt-4 bg-gray-300 text-gray-600 rounded-md font-bold z-10 overflow-hidden">
        {type}
      </p>
      <div class="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition">
        <Img
          class="w-full h-3/4 object-fit"
          fixed={img}
          alt="Sunset in the mountains"
        />
        <div class="w-full p-4 flex flex-col justify-between ">
          <h3 class="text-xl font-bold text-gray-900 mb-4 leading-normal truncante ...">
            {title}
          </h3>
          <Link
            to={slug}
            class="inline-flex items-center text-gray-600 group-hover:font-bold"
          >
            <span class="text-xl">Read More</span>
            <svg
              className="inline ml-2 stroke-current text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke-width="1"
            >
              <path
                class="heroicon-ui"
                d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Link>
  )
}

export default RefCard
