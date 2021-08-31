import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import { ThemeProvider } from '../components/themeContext'
import Music from "../components/musicbar"
import "../styles/markdown.css"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata
  const { posts } = data.latestPosts

  return (
    <ThemeProvider>
      <div className="container flex flex-col mx-auto">
        <div className="container flex h-screen">
          <Header></Header>
          <div className="w-screen h-screen left-0 top-0 absolute select-none">
            <img className="opacity-70 m-0 object-cover w-screen h-screen pointer-events-none" alt="temple cover" src={data.image.publicURL}/>
          </div>
        </div>
        
        <div className="container relative mx-auto px-5 sm:px-5 mt-16 w-screen items-center flex flex-col">
          <div className="w-4/6">
            <Music className="markdown" 
            Lyrics="沒有人可以對我說 除了溫柔的晚風" 
            Song="或是一首歌" Singer="田馥甄" 
            Album="無人知曉"></Music>
          </div>
          <h1 className="markdown">Welcome to my blog!</h1>
          <blockquote className="markdown">雖然我還沒有太多的文字能提供給你，但是希望你在這裡能翱翔其中！</blockquote>

          <div className="mt-20 sm:mt-10 container flex-row items-center sm:p-5 justify-center w-5/6 mx-auto">
            {
              posts.map(post => (
                <article key={post.id} className="container flex flex-col sm:flex-row rounded-lg shadow-xl my-8 bg-white dark:bg-gray-600 h-76 sm:h-60">
                  <div className="container w-full py-5 px-8">
                    <p className="font-bold block text-gray-500 dark:text-gray-300 text-md uppercase">{post.frontmatter.date}&nbsp;•&nbsp;
                    <span className="font-semibold text-green-600  dark:text-green-300 normal-case">{post.frontmatter.category}</span>&nbsp;•&nbsp;
                    <span className="font-semibold text-purple-500 dark:text-purple-200 normal-case">{post.fields.readingTime.text}</span></p>
                    <h1 className="inline-block text-2xl font-semibold my-2 hover:underline cursor-pointer"><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h1>
                    <h5 className="h-24 w-5/6 sm:block hidden">{post.frontmatter.description}</h5>
                    <Link to={post.fields.slug} className="font-semibold sm:mx-auto mb-0 flex flex-row justify-end">
                      <button className="dark:text-white p-1 px-3 rounded hover:bg-blue-100 dark:hover:bg-gray-500 font-bold">Read More →</button>
                    </Link>
                  </div>
                </article>
              ))
            }
            <Link to="/blog" className="font-semibold mx-auto mb-0 flex flex-row justify-center">
              <button className="dark:text-white p-1 px-3 rounded hover:bg-blue-100 dark:hover:bg-gray-500 font-bold">See All Blogs</button>
            </Link>
          </div>

          <div className="h-20"></div>
          <Footer></Footer>
        </div>
      </div>
    </ThemeProvider>
  )
}

export const pageQuery = graphql `
query IndexQuery {
    site {
      siteMetadata {
        title 
        description
      }
    }
    image: file(base: { eq: "cover.jpeg" }) {
      publicURL
    }
    latestPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { layout: { eq: "blog-post" } }
      }
      limit: 5
    ) {
      posts:nodes {
        excerpt(pruneLength: 80)
        id
        fields {
          slug
          readingTime {
            minutes
            text
          }
        }
        frontmatter {
          title
          layout
          date(formatString: "MMMM YYYY")
          category
          description
        }
      }
    }
  }
`
