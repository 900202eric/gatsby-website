import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import { ThemeProvider } from '../components/themeContext'
import "../styles/markdown.css"
import Seo from "../components/seo"

export default function About({ data }) {
  const post = data.markdownRemark

  return (
    <ThemeProvider>
      <Seo title={"About"}></Seo>
      <div className="container flex flex-col mx-auto">
        <div className="container flex mx-auto">
          <Header></Header>
        </div>

        <div className="px-4 py-10 pt-20 mx-auto w-full sm:w-5/6 md:w-4/6 container justify-center markdown">
          <h1 className="text-4xl font-medium">{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>

        <Footer></Footer>
      </div>
    </ThemeProvider>
  )
}

export const query = graphql`
  query AboutPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: { eq: $slug }}) {
      html
      frontmatter {
        title
      }
    }
  }
`

