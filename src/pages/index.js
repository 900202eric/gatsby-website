import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import { ThemeProvider } from '../components/themeContext'
import Music from "../components/musicbar"
import Seo from "../components/seo"
import "../styles/markdown.css"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata
  const { posts } = data.latestPosts

  return (
    <ThemeProvider>
    <Seo title={"Home"}></Seo>
      <div className="container flex flex-col mx-auto">
        <div className="container flex h-screen">
          <Header></Header>
          <div className="contaienr flex flex-col mx-auto my-auto items-center justify-center">
            <h1 className="text-white border-4 md:border-8 mb-4 bg-gray-400 bg-opacity-40 p-6 border-white z-50 font-serif text-5xl md:text-9xl">H.WEI.C</h1>
            <h1 className="text-white border-white z-50 font-serif text-5xl md:text-9xl border-b-4 md:border-b-8">BLOG SITE</h1>
          </div>
          <div className="w-screen h-screen left-0 top-0 absolute select-none bg-gray-300 dark:bg-opacity-0">
            <img className="opacity-70 m-0 object-cover w-screen h-screen pointer-events-none" alt="temple cover" src={data.image.publicURL}/>
          </div>
        </div>
        
        <div className="container relative mx-auto px-5 mt-16 items-center flex flex-col">
          <div className="w-11/12">
            <Music className="markdown" 
            Lyrics="There are plenty of ways that you can hurt a man" 
            Song="Another One Bites the Dust" Singer="Queen" 
            Album="The Game"></Music>
          </div>
          <h1 className="markdown">Welcome to my blog!</h1>
          <blockquote className="markdown">雖然我還沒有太多的文字能提供給你，但是希望你在這裡能翱翔其中！</blockquote>

          <div className="container flex-row items-center justify-center w-11/12 mx-auto">
            {
              posts.map(post => (
                <article key={post.id} className="container flex flex-col sm:flex-row rounded-lg shadow-xl my-8 bg-white dark:bg-gray-600 h-76 sm:h-60">
                  <div className="container w-full py-5 px-8">
                    <p className="font-bold block text-gray-500 dark:text-gray-300 text-md uppercase">{post.frontmatter.date}&nbsp;•&nbsp;
                    <span className="font-medium text-green-600  dark:text-green-300 normal-case">{post.frontmatter.category}</span></p>
                    <h1 className="inline-block text-2xl font-medium my-2 hover:underline cursor-pointer"><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h1>
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
