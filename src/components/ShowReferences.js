import React, { useState, useEffect } from "react"
import RefCard from "../components/RefCard"

const ShowReferences = ({ info }) => {
  // 1. get the array
  const list = info.edges

  // 2. set the initial array as SORTABLE
  const [sorted, setSorted] = useState(list)

  // 3. set the inital year and yearState
  const [selectedYear, setYear] = useState("All")
  const [selectedType, setType] = useState("All")

  const handleYearChange = e => {
    setYear(e.target.value)
  }

  const handleTypeChange = e => {
    setType(e.target.value)
  }

  const filter = (filterable, year, type) => {
    if (year != "All" || type != "All")
      setSorted(
        filterable.filter(
          item => item.node.acf.year === year && item.node.acf.type === type
        )
      )

    if (year == "All" && type != "All")
      setSorted(filterable.filter(item => item.node.acf.type === type))
    if (year != "All" && type == "All")
      setSorted(filterable.filter(item => item.node.acf.year === year))
    if (year === "All" && type === "All") setSorted(filterable)
  }

  useEffect(() => {
    filter(list, selectedYear, selectedType)
    console.log(selectedYear, selectedType)
  }, [selectedYear, selectedType])

  return (
    <section className="py-16 w-full bg-gray-200">
      <div className="max-w-screen-xl mx-auto">
        <div className="my-6 flex">
          <div class="w-full md:w-1/3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
              for="year"
            >
              Year
            </label>
            <div className="relative">
              <select
                onChange={handleYearChange}
                className="block no-form w-full bg-gray-200 border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="year"
              >
                {["All", ...new Set(list.map(e => e.node.acf.year))].map(
                  (year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  )
                )}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3  mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2"
              for="type"
            >
              Type
            </label>
            <div className="relative">
              <select
                onChange={handleTypeChange}
                className="block no-form w-full bg-gray-200 border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="type"
              >
                {["All", ...new Set(list.map(e => e.node.acf.type))].map(
                  (type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  )
                )}
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          {sorted.map(post => (
            <>
              <RefCard
                title={post.node.acf.title}
                slug={post.node.slug}
                img={post.node.acf.img.localFile.childImageSharp.fixed}
                type={post.node.acf.type}
              />
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowReferences
