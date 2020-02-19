import React from "react"
import Layout from "../components/Layout"
import avatar from "../imgs/avatar.png"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="w-3/4  mx-auto flex flex-col items-center">
          <h1 className="font-display text-xl md:text-2xl xl:text-6xl font-bold mt-40">
            About the company
          </h1>
          <img
            className=" font-display w-32 h-32 xl:w-40 xl:h-40 mt-20 mb-4"
            src={avatar}
            alt="Jozsef Czufor - CEO"
          ></img>
          <h2 className="text-xl font-bold w-">Joshep Engineer</h2>
          <p className="text-lg font-bold text-gray-700">Founder and CEO</p>
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
          <p className="text-lg leading-loose mt-4 mb-24 w-1/2">
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
        <div className="w-full bg-gray-300 py-2">
          <section className="container text-center w-full mx-auto mt-20 mb-20">
            <h2 class="text-2xl md:text-4xl font-bold font-display">
              Our services
            </h2>
            {/* <div class="h-1 mx-auto bg-gray-400 w-24 opacity-75 mt-4 rounded"></div> */}
            <p className="w-full md:w-1/2 mx-auto text-xl mt-4 mb-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolore
              distinctio ipsam consectetur maiores.
            </p>
            <div class="w-3/3 text-left mx-auto flex flex-wrap justify-center m-12 ">
              <div class="w-3/4 md:w-2/6 lg:w-1/4  rounded mx-8 p-8 shadow-xl bg-gray-400 hover:bg-gray-500 hover:shadow-2xl transition-all duration-200">
                <h2 class=" font-display text-gray-900 text-lg md:text-2xl font-bold mb-8">
                  Infrastructure building
                </h2>
                <p class="text-gray-800 text-base leading-loose">
                  We specialized in a wide range of infrastructure building and
                  execution.From roads to savage systems, we have a decade long
                  experience and professional assets.
                </p>
                <Link to="/references" className="mt-4 block text-xl">
                  See related works...
                </Link>
              </div>
              <div class="transition duration-200 ease-in group w-3/4 md:w-2/6 lg:w-1/4  rounded mx-8 p-8 shadow-xl bg-gray-400 hover:bg-gray-500 hover:shadow-2xl transition-all duration-200">
                <h2 class="font-display text-gray-900 text-lg md:text-2xl font-bold mb-8">
                  Civil Engineering Design
                </h2>
                <p class="font-display text-gray-800 text-base leading-loose">
                  Our company started as a civil engineering, infrastructure
                  designing agency. This means that we have designed every
                  possible machinery an infrastructural project needs.
                </p>
                <Link
                  to="/references"
                  className="mt-4 block group-hover:font-bold text-xl"
                >
                  See related works...
                </Link>
              </div>
              <div class="w-3/4 md:w-2/6 lg:w-1/4  rounded mx-8 p-8 shadow-xl bg-gray-400 hover:bg-gray-500 hover:shadow-2xl transition-all duration-200">
                <h2 class="font-display text-gray-900 text-lg md:text-2xl font-bold mb-8">
                  Technical construction supervision
                </h2>
                <p class="text-gray-800 text-base leading-loose">
                  With experience in execution and design, we are able to
                  supervise any infrastructural and technical project in the
                  building industry.
                </p>
                <Link
                  to="/references"
                  className="mt-20 block group-hover:font-bold text-xl"
                >
                  See related works...
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default About
