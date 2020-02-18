import React from "react"
import Layout from "../components/Layout"
import avatar from "../imgs/avatar.png"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="w-3/4 md:w-1/2 mx-auto flex flex-col items-center">
          <h1 className="text-xl md:text-2xl xl:text-6xl font-bold mt-40">
            About the company
          </h1>
          <img
            className="w-32 h-32 xl:w-40 xl:h-40 mt-20"
            src={avatar}
            alt="Jozsef Czufor - CEO"
          ></img>
          <h2 className="text-xl font-bold w-">John Doe</h2>
          <p className="text-lg font-bold text-blue-600">Position</p>
          <p className="text-lg leading-loose mt-20 w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            repellendus unde sint nobis, distinctio, itaque nam, sit quo
            excepturi quas aperiam! Molestiae, magni quo. Natus, eaque minus
            dolorum esse exercitationem et voluptatem ipsam repellat sequi quam
            doloremque sit ratione. In, voluptates aut. Dolor, obcaecati.
            Praesentium, iusto tempora quos laboriosam voluptates eius soluta
            nesciunt iste maxime tenetur corrupti sint fugiat consectetur
            repellendus possimus totam et incidunt! Suscipit sunt facere tenetur
            dolorem doloribus corrupti architecto unde ratione a. Explicabo
            quaerat vero ipsa rem molestiae fugit quis, doloribus fugiat
            deserunt sequi, aut unde repellat molestias suscipit culpa sit modi
            officiis, optio ad repudiandae.
          </p>
        </div>
        <section className="container text-center w-full mx-auto mt-20 mb-20">
          <h2 class="text-2xl md:text-4xl font-bold">Our services</h2>
          {/* <div class="h-1 mx-auto bg-gray-400 w-24 opacity-75 mt-4 rounded"></div> */}
          <p className="w-full md:w-1/2 mx-auto text-xl mt-4 mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolore
            distinctio ipsam consectetur maiores.
          </p>
          <div class="w-3/3 text-left mx-auto flex flex-wrap justify-center m-12 ">
            <div class="w-3/4 md:w-2/6 lg:w-1/4  rounded mx-8 p-8 shadow-xl bg-gray-400 hover:bg-gray-500 hover:shadow-2xl transition-all duration-200">
              <h2 class="text-gray-900 text-lg md:text-2xl font-bold mb-8">
                Vivamus vestibulum ntulla nec ante
              </h2>
              <p class="text-gray-800 text-base leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/references" className="mt-4 block">
                See related works...
              </Link>
            </div>
            <div class="transition duration-200 ease-in group w-3/4 md:w-2/6 lg:w-1/4  rounded mx-8 p-8 shadow-xl bg-gray-400 hover:bg-gray-500 hover:shadow-2xl transition-all duration-200">
              <h2 class="text-gray-900 text-lg md:text-2xl font-bold mb-8">
                Vivamus vestibulum ntulla nec ante
              </h2>
              <p class="text-gray-800 text-base leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/references" className="mt-4 block">
                See related works...
              </Link>
            </div>
            <div class="w-3/4 md:w-2/6 lg:w-1/4  rounded mx-8 p-8 shadow-xl bg-gray-400 hover:bg-gray-500 hover:shadow-2xl transition-all duration-200">
              <h2 class="text-gray-900 text-lg md:text-2xl font-bold mb-8">
                Vivamus vestibulum ntulla nec ante
              </h2>
              <p class="text-gray-800 text-base leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link
                to="/references"
                className="mt-4 block group-hover:font-bold"
              >
                See related works...
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About
