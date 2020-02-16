import React from "react"
import Layout from "../components/Layout"
import RefCard from "../components/RefCard"

const references = ({ data }) => {
  return (
    <Layout>
      <div className="w-3/4 mx-auto">
        <div className="w-2/5">
          <h1 className="mb-8 mt-20 text-5xl font-bold">Our References</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est amet
            fugit autem neque facere accusamus eum necessitatibus incidunt
            assumenda minus quasi, doloremque aperiam nisi ea voluptatibus culpa
            expedita provident vitae officia tempora! Illum quaerat veritatis
            animi provident accusantium iste consequuntur.
          </p>
        </div>
      </div>
      <div className="w-3/4 flex flex-wrap justify-center mx-auto mt-16">
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
