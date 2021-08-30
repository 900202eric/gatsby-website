import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import { ThemeProvider } from '../components/themeContext'

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <ThemeProvider>
      <div>
        <Header></Header>

        <div className="container flex-row items-center p-5 justify-center">
          {
            posts.map(post => (
              <article key={post.id} className="container flex flex-row rounded-lg shadow-lg m-2 my-4 bg-white dark:bg-gray-600 h-52">
                <div className="container w-5/6 py-5 px-8">
                  <p className="font-bold block text-gray-500 dark:text-gray-300 text-md uppercase">{post.frontmatter.date}&nbsp;•&nbsp;
                  <span className="font-semibold text-green-500 hover:text-purple-400 cursor-pointer">{post.frontmatter.category}</span></p>
                  <h2 className="inline-block text-xl font-bold my-2 hover:underline cursor-pointer"><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h2>
                  <div className="container flex flex-row items-center">
                    <p className="h-24 w-5/6">{post.excerpt}</p>
                    <Link to={post.fields.slug} className="font-semibold mx-auto h-6 my-auto">
                      <button className="text-blue-500 dark:text-blue-300 hover:underline">Read • {} min</button>
                    </Link>
                  </div>
                </div>
                <div className="container w-52 h-52 items-center flex flex-row">
                  <img src={data.image.publicURL} className="w-52 my-atuo mx-auto object-scale-down"></img>
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </ThemeProvider>
  )
}

export const pageQuery = graphql `
  query MyQuery {
    blog: allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM YYYY")
          title 
          author
          category
        }
        excerpt(pruneLength: 300)
        id
      }
    }
    image: file(base: { eq: "dog.jpeg" }) {
      publicURL
    }
  }
`