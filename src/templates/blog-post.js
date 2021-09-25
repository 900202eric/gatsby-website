import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Music from "../components/musicbar"
import { ThemeProvider } from '../components/themeContext'
import "../styles/markdown.css"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement();

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <ThemeProvider>
      <div className="container flex flex-col mx-auto">
        <Header></Header>

        <div className="pt-20 px-5 py-10 mx-auto w-full sm:w-5/6 md:w-4/6 container flex flex-col items-center markdown">
          <h1 className="text-4xl font-medium text-center">{post.frontmatter.title}</h1>
          <p className="text-md font-medium text-gray-700 dark:text-gray-200 mb-16">{post.frontmatter.date} • {post.frontmatter.category}</p>
          <Music className="markdown" 
          Lyrics={post.frontmatter.music.lyrics} 
          Song={post.frontmatter.music.song} Singer={post.frontmatter.music.singer}
          Album={post.frontmatter.music.album}></Music>
          <p>{post.frontmatter.description}</p>
          {!!post.tableOfContents && (
            <div
              className="post-toc //fixed //top-40 //left-5 w-full pl-5"
              dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
            />
          )}
          <div className="order w-full" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>

        <Footer></Footer>
      </div>
    </ThemeProvider>
  )
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } }) {
      html
      fields {
        readingTime {
          minutes
          text
        }
      }
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
        category
        description
        music {
          lyrics
          song
          singer
          album
        }
      }
    }
  }
`