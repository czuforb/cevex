import React from "react"
import Layout from "../components/Layout"
import InfoBox from "../components/InfoBox"
import RefCard from "../components/RefCard"

import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

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
        to="/"
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

      <section className="n mx-auto w-full lg:w-3/4 h-auto bg-gray-200">
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
        />
        <div className="mx-4">
          <h2 className="text-xl font-bold">Project overview</h2>
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
          <div className="w-40 h-40 bg-gray-300 shadow-lg m-4 mt-6"></div>
          <div className="w-40 h-40 bg-gray-300 shadow-2xl m-4"></div>
          <div className="w-40 h-40 bg-gray-300 shadow-lg m-4 mt-6"></div>
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
        <h2 cllasName="mx-auto text-2xl">Related works</h2>
      </div>
    </Layout>
  )
}

export default template
