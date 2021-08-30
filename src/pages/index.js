import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import { ThemeProvider } from '../components/themeContext'

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata

  return (
    <ThemeProvider>
      <div>
        <Header></Header>
        <div>
          <div></div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title 
        description
      }
    }

    image: file(base: { eq: "dog.jpeg" }) {
      publicURL
    }
  }
`