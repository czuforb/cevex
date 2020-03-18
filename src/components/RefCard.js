import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const RefCard = ({ title, slug, img, type }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded bg-gray-300 shadow-md my-6 mr-8 relative">
      <p className="absolute z-10 p-1 m-2 bg-gray-100 rounded">{type}</p>
      <Img class="w-full" fixed={img} alt={title} />
      <div class="py-4 px-6 flex flex-col justify-start h-40">
        <h3 class="font-bold text-xl">{title}</h3>
        <Link to={`/${slug}`} class="flex items-center mt-auto">
          <span class="text-xl">Read More</span>
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            strokeWidth="1"
          >
            <path
              class="heroicon-ui"
              d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default RefCard
