import React from "react"
import "../styles/style.css"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"

import RefCard from "../components/RefCard"
import Testimonial from "../components/Testimonial"

import "animate.css/animate.min.css"

import avatar1 from "../../static/avatars/avatar-1.png"
import avatar2 from "../../static/avatars/avatar-2.png"
import avatar3 from "../../static/avatars/avatar-3.png"
import avatar4 from "../../static/avatars/avatar-4.png"

import ScrollAnimation from "react-animate-on-scroll"

function Index({ data }) {
  return (
    <Layout>
      <Hero />
      {/* FEATURE */}
      <ScrollAnimation animateIn="fadeIn">
        <section className="w-full h-auto ">
          <div className="mx-auto | flex flex-col sm:flex-row ">
            <div className="w-full md:w-1/2 h-auto |  bg-bl-00 | flex flex-col justify-center items-center | py-8 md:py-10 lg:py-40 ">
              <h2 className="w-1/2 | text-2xl md:text-6xl font-bold">
                We <span className="cl-yllw-00">build</span> more than 20 years.
              </h2>
            </div>
            <div className="w-full sm:w-1/2 | flex flex-col justify-center items-center | my-12 ">
              <p className="w-3/4 mx-auto sm:mx-0 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
                officia! Vero cum eaque qui expedita excepturi debitis
                aspernatur amet, voluptatem architecto numquam. Laboriosam vel
                quisquam rem at, dolorum architecto voluptatibus.
                <Link className="block mx-auto md:mx-0 mt-4" to="/">
                  <button className="py-2 px-3 bg-yllw-00 hover:bg-yellow-500 shadow-xl hover:shadow-2xl rounded font-bold transition-all duration-150 ease-in">
                    Read more
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* FEATURED PROJECTS */}

      <section className="flex flex-col justify-center items-center bg-gray-200 p-16">
        <h2 className=" text-2xl md:text-4xl font-bold mb-4">
          Featured projects
        </h2>
        <p className="text-base md:text-xl text-center w-full md:w-3/4 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          corrupti dolorum ratione, distinctio sapiente, quaerat, veniam optio
          minus fuga culpa vitae magnam voluptates? Provident eveniet delectus
          nobis sapiente, libero voluptas.
        </p>
        <div className="flex flex-col lg:flex-row justify-center">
          {data.allWordpressPost.edges.map(post => (
            <>
              <RefCard
                title={post.node.acf.title}
                slug={post.node.slug}
                img={post.node.acf.img.localFile.childImageSharp.fixed}
              />
            </>
          ))}
        </div>
        <Link to="/references" className="">
          <button className="py-2 px-3 bg-yllw-00 hover:bg-yellow-500 rounded font-bold transition-all duration-150 ease-in">
            More...
          </button>
        </Link>
      </section>

      {/* TESTIMONIALS */}

      <section className="w-full flex flex-col items-center p-16 bg-bl-00">
        <h2 className="text-gray-200 text-4xl font-bold">Our clients said</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center mt-8 mb-16">
          <Testimonial
            img={avatar1}
            name="Margaret Somebody"
            quote="I STRONGLY recommend Cevex to EVERYONE interested in running a successful online business! Absolutely wonderful! Cevex was the best investment I ever made."
          />
          <Testimonial
            img={avatar2}
            name="Susane Whocouldbe"
            quote="I'd be lost without Cevex. Cevex has really helped our business. Cevex has completely surpassed our expectations."
          />
          <Testimonial
            img={avatar3}
            name="Johnny Someone"
            quote="Cevex was the best investment I ever made. I use Cevex often. Definitely worth the investment."
          />
          <Testimonial
            img={avatar4}
            name="Female Boss"
            quote="We have no regrets! I would gladly pay over 600 dollars for Cevex. Cevex has completely surpassed our expectations. We're loving it."
          />
        </div>
      </section>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query {
    allWordpressPost(limit: 3) {
      edges {
        node {
          slug
          acf {
            title
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
    }
  }
`
