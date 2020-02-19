import React from "react"
import Layout from "../components/Layout"
import RefCard from "../components/RefCard"

const references = ({ data }) => {
  return (
    <Layout>
      <div className="w-3/4 mx-auto">
        <div className="w-2/5">
          <h1 className="mb-8 mt-20 text-5xl font-bold">Our References</h1>
          <p className="text-xl">
            On the follwing page you find all our projects from the last few
            years. By clicking on the cards you can find detailed information
            about them.
          </p>
        </div>
      </div>
      <div className="w-3/4 mx-auto mt-16 mb-8">
        <div class="inline-block relative w-64 mr-12">
          <p className="text-gray-600 font-bold mb-2">Select year:</p>
          <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
          </select>
        </div>
        <div class="inline-block relative w-64">
          <p className="text-gray-600 font-bold mb-2">Select type:</p>

          <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Infrastucture</option>
            <option>Land works</option>
            <option>Engineering</option>
          </select>
        </div>
      </div>
      <div className="w-3/4 flex flex-wrap justify-center mx-auto mt-4">
        {data.allWordpressPost.edges.map(post => (
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
    </Layout>
  )
}

export default references

export const query = graphql`
  query {
    allWordpressPost {
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
