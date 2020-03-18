import React from "react"
import { Link, graphql } from "gatsby"
import RefCard from "../components/RefCard"

const FeaturedProjects = ({ data }) => {
  console.log(data)
  return (
    <section className="w-full p-4">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Featured projects</h2>
      <div className="flex flex-wrap flex-col md:flex-row justify-around my-8 mx-auto">
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
      <Link to="/references" className="">
        <button className="py-2 px-3 bg-yllw-00 hover:bg-yellow-500 shadow-xl hover:shadow-2xl rounded font-bold transition-all duration-150 ease-in">
          More projects
        </button>
      </Link>
    </section>
  )
}

export default FeaturedProjects

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
