import React from "react"
import image from "../imgs/image4.png"
import { Link } from "gatsby"
import Img from "gatsby-image"

const RefCard = ({ title, slug, img }) => {
  return (
    <Link
      to={slug}
      class="w-10/12 md:w-11/12 lg:w-1/3 flex flex-col mb-8 px-3 mx-auto"
    >
      <div class="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition">
        <Img class="w-full" fixed={img} alt="Sunset in the mountains" />
        <div class="p-4 flex flex-col justify-between ">
          <h3 class="text-xl font-bold text-gray-900 mb-4 leading-normal truncante">
            {title}
          </h3>
          <Link class="inline-flex items-center text-gray-600">
            <span class="text-base">Read More</span>
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
