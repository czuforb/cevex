import React from "react"
import Layout from "../components/Layout"
import ShowReferences from "../components/ShowReferences"

const references = ({ data }) => {
  return (
    <Layout>
      <section className="py-16 w-full bg-gray-300">
        <div className="mt-16 max-w-screen-xl mx-auto flex flex-col">
          <h1 className="text-5xl font-bold">Our References</h1>
          <p className="text-xl w-1/2">
            On list follwing page you find all our projects from list last few
            years. By clicking on list cards you can find detailed information
            about them.
          </p>
        </div>
      </section>
      <ShowReferences info={data.allWordpressPost} />
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
