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
        <section className="w-full h-auto flex flex-col md:flex-row flex-1">
          <div className="md:w-1/2 bg-bl-00 p-4">
            <h2 className="text-center text-2xl md:text-5xl font-bold text-gray-100">
              We are <span className="cl-yllw-00">building</span> in the
              industry for{" "}
              <span className="cl-yllw-00">more than 20 years</span>.
            </h2>
          </div>
          <div className="md:w-1/2 bg-gray-200 p-4">
            <h2 className="font-display text-2xlfont-bold">About us</h2>
            <p className="text-xl leading-loose">
              Our company has been involved in domestic construction design and
              construction since 1998 in various forms of company. The Company
              mainly carries out its construction activities in Borsod and Heves
              counties. Our headquarters are in Miskolc and our sites are in
              Edelény and Tard. In line with the increased demands, we strive to
              use state-of-the-art technologies in our work and to always comply
              with environmental and safety regulations.
              <Link className="block mx-auto md:mx-0 mt-10" to="/about">
                <button className="py-2 px-3 bg-yllw-00 hover:bg-yellow-500 shadow-xl hover:shadow-2xl rounded font-bold transition-all duration-150 ease-in">
                  Read our story
                </button>
              </Link>
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* FEATURED PROJECTS */}

      <section className="w-full p-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Featured projects
        </h2>
        <div className="flex flex-wrap flex-col md:flex-row justify-around my-8 mx-auto">
          {data.allWordpressPost.edges.map(post => (
            <>
              <RefCard
                // size="bg-red-400"
                title={post.node.acf.title}
                slug={post.node.slug}
                img={post.node.acf.img.localFile.childImageSharp.fixed}
                type={post.node.acf.type}
              />
            </>
          ))}
        </div>
        <Link to="/references" className="">
          <button className="py-2 px-3 bg-yllw-00 hover:bg-yellow-500 shadow-xl hover:shadow-2xl rounded font-bold transition-all duration-150 ease-in">
            More projects
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
            type
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
