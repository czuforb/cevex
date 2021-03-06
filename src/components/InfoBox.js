import React from "react"

const InfoBox = ({ year, place, type, referee, refphone, budget }) => {
  return (
    <div className="w-full mx-auto">
      <div className="p-8 bg-gray-100 my-12 rounded mx-auto shadow-lg">
        <ul className="flex flex-row flex-wrap mb-4">
          <li className="w-1/3 px-4 rounded">
            <h3 className="text-lg font-bold text-gray-800">
              Date
              <span className="block font-thin">{year}</span>
            </h3>
          </li>
          <li className="w-1/3 px-4 rounded">
            <h3 className="text-lg font-bold text-gray-800">
              Place
              <span className="block font-thin">{place}</span>
            </h3>
          </li>
          <li className="w-1/3 px-4 rounded">
            <h3 className="text-lg font-bold text-gray-800">
              Status
              <span className="block font-thin">Ongoing</span>
            </h3>
          </li>
          <div className="w-full border-1 my-2"> </div>
          <li className="w-1/3 px-4 rounded">
            <h3 className="text-lg font-bold text-gray-800">
              Type
              <span className="block font-thin">{type}</span>
            </h3>
          </li>
          <li className="w-1/3 px-4 rounded">
            <h3 className="text-lg font-bold text-gray-800">
              Budget
              <span className="block font-thin">{budget} mHUF</span>
            </h3>
          </li>
        </ul>
        <div className="w-full h-auto px-4 py-4 rounded bg-gray-200 flex flex-col shadow-inner">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Referee</h3>
          <p className="text-lg font-bold text-gray-900">{referee}</p>
          <a className="block text-lg text-gray-700" href="tel:+36305537883">
            {refphone}
          </a>
        </div>
      </div>
    </div>
  )
}

export default InfoBox
