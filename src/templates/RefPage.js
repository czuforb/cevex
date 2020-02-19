import React from "react"
import Layout from "../components/Layout"
import InfoBox from "../components/InfoBox"

import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import image1 from "../../static/image4.png"
import image2 from "../../static/image6.png"

import gallery1 from "../../static/gallery/gallery1.png"
import gallery2 from "../../static/gallery/gallery2.png"
import gallery3 from "../../static/gallery/gallery3.png"

export const query = graphql`
  query($id: Int!) {
    wordpressAcfPosts(wordpress_id: { eq: $id }) {
      wordpress_id
      acf {
        title
        short
        text
        year
        place
        referee
        refphone
        type
        status
        budget
        img {
          source_url
          localFile {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

const template = ({ data }) => {
  return (
    <Layout>
      {/* HERO SECTION */}
      <Link
        to="/references"
        className="hidden md:block opacity-50 group hover:opacity-100 bg-gray-200 rounded-full p-4 m-10 fixed"
      >
        <svg
          className="inline"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            class="heroicon-ui"
            d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"
          />
        </svg>
        <span className="hidden group-hover:block">Back</span>
      </Link>

      <section className="mt-32 mx-auto w-full lg:w-3/4 h-auto bg-gray-200">
        <div className="md:hidden mx-auto w-full ">
          <div className="w-3/4 ml-8">
            <h1 className="text-4xl font-bold">
              {data.wordpressAcfPosts.acf.title}
            </h1>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              facilis autem repudiandae maxime, aut perferendis ad possimus
              expedita exercitationem quo!
            </p>
          </div>
          <div className="w-1/2 rounded bg-gray-300">
            <Img
              className="w-full h-full object-fit inset-0 relative"
              fixed={
                data.wordpressAcfPosts.acf.img.localFile.childImageSharp.fixed
              }
              objectFit="cover"
            />
          </div>
        </div>

        {/* TABLET + DESKTOP */}

        <div className="hidden md:flex flex-col-reverse md:flex-row w-full">
          <div className="lg:w-3/4 flex justify-center items-center">
            <div className="w-3/4 lg:w-1/2">
              <h1 className="text-4xl font-bold">
                {data.wordpressAcfPosts.acf.title}
              </h1>
              <p className="text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                facilis autem repudiandae maxime, aut perferendis ad possimus
                expedita exercitationem quo!
              </p>
            </div>
          </div>
          <div className="md:w-full lg:w-2/3 flex justify-center items-center p-10">
            <Img
              fixed={
                data.wordpressAcfPosts.acf.img.localFile.childImageSharp.fixed
              }
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}

      <div className="md:w-2/3 lg:w-1/3 mx-auto mt-12 mb-24">
        <InfoBox
          key={data.wordpressAcfPosts.wordpress_id}
          year={data.wordpressAcfPosts.acf.year}
          place={data.wordpressAcfPosts.acf.place}
          type={data.wordpressAcfPosts.acf.type}
          referee={data.wordpressAcfPosts.acf.referee}
          refphone={data.wordpressAcfPosts.acf.refphone}
          status={data.wordpressAcfPosts.acf.status}
          budget={data.wordpressAcfPosts.acf.budget}
        />
        <div className="">
          <h2 className="font-display text-xl font-bold">Project overview</h2>
          <p className="text-lg leading-loose my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            eveniet dolore impedit doloribus laboriosam incidunt quas non
            obcaecati accusamus! Eligendi, sunt. Tempora iusto, ea mollitia vero
            ullam odio perspiciatis minima distinctio est beatae possimus ipsam
            architecto nam incidunt commodi quaerat quae dicta vel qui ut unde
            labore enim illo nemo!
          </p>
          <p className="text-lg leading-loose my-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis ea tempora repellendus, ab id labore officia nobis
            maxime, facilis distinctio optio magni qui ipsa molestias dolores,
            fugiat provident consequatur saepe incidunt. Itaque aspernatur, eius
            quod quae perferendis debitis laboriosam similique.
          </p>
        </div>
        <h2 className="font-display text-xl font-bold mb-4 ">Location </h2>
        <div class="w-full h-40 rounded bg-gray-200 flex justify-center items-center">
          <h3 class="text-gray-600">Google Maps placeholder...</h3>
        </div>
        <div className="flex mx-auto m-16 justify-center">
          <svg
            className="inline my-auto mr-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              class="heroicon-ui"
              d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"
            />
          </svg>
          <img src={gallery1} className="object shadow-lg m-4 mt-6" />
          <img src={gallery2} className="object shadow-xl m-4 mt-6 scale-150" />
          <img src={gallery3} className="object shadow-lg m-4 mt-6" />
          <svg
            className="inline my-auto ml-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              class="heroicon-ui"
              d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
            />
          </svg>
        </div>
        <h2 className="font-display text-xl font-bold">Related works</h2>
        <div className="w-full flex flex-row my-8">
          <Link
            to="/references"
            className={` w-10/12 md:w-11/12 lg:w-1/2 flex flex-col mb-8 px-3 mx-auto shadow-xl hover:shadow-2xl`}
          >
            <div class="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition">
              <img class="w-full" src={image1} alt="Sunset in the mountains" />
              <div class="p-4 flex flex-col justify-between ">
                <h3 class="text-xl font-bold text-gray-900 mb-4 leading-normal truncante">
                  Road building Noszvaj
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
          <Link
            to="/references"
            className={` w-10/12 md:w-11/12 lg:w-1/2 flex flex-col mb-8 px-3 mx-auto shadow-xl hover:shadow-2xl`}
          >
            <div class="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition">
              <img class="w-full" src={image2} alt="Sunset in the mountains" />
              <div class="p-4 flex flex-col justify-between ">
                <h3 class="text-xl font-bold text-gray-900 mb-4 leading-normal truncante">
                  New road Tard
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
        </div>
      </div>
    </Layout>
  )
}

export default template
