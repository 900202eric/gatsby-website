import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import { ThemeProvider } from '../components/themeContext'

export default class Blog extends React.Component {
  render() {
    const { data } = this.props
    const { posts } = data.blog
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/blog" : "/blog/" + (currentPage - 1).toString()
    const nextPage = "/blog/" + (currentPage + 1).toString()

    return (
      <ThemeProvider>    
        <div className="container flex flex-col mx-auto">
          <Header></Header> 

          <div className="mt-20 sm:mt-10 container flex-row items-center sm:p-5 justify-center w-5/6 mx-auto">
            {
              posts.map(post => (
                <article key={post.id} className="container flex flex-col sm:flex-row rounded-lg shadow-xl my-8 bg-white dark:bg-gray-600 h-92 sm:h-60">
                  <div className="container w-full py-5 px-8">
                    <p className="font-bold block text-gray-500 dark:text-gray-300 text-md uppercase">{post.frontmatter.date}&nbsp;•&nbsp;
                    <span className="font-semibold text-green-600  dark:text-green-300 normal-case">{post.frontmatter.category}</span>&nbsp;•&nbsp;
                    <span className="font-semibold text-purple-500 dark:text-purple-200 normal-case">{post.fields.readingTime.text}</span></p>
                    <h2 className="inline-block text-2xl font-semibold my-2 hover:underline cursor-pointer"><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h2>
                    <h5 className="h-24 w-5/6 sm:block hidden">{post.frontmatter.description}</h5>
                    <Link to={post.fields.slug} className="font-semibold sm:mx-auto mb-0 flex flex-row justify-end">
                      <button className="dark:text-white p-1 px-3 rounded hover:bg-blue-100 dark:hover:bg-gray-500 font-bold">Read More →</button>
                    </Link>
                  </div>
                  {false && <div className="container w-full sm:w-48 h-40 items-center flex flex-row my-auto px-1">
                    {true && <img src="https://ice1187.github.io/images/default-cat.jpg" className="w-full h-40 mx-auto object-cover rounded-b-lg sm:rounded-r-lg"></img>}
                  </div>}
                </article>
              ))
            }
          </div>

          <div className="container flex flex-row relative h-16 w-full sm:w-4/6 mx-auto mt-6">
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                <button className="absolute left-4 sm:left-20 font-bold text-2xl text-green-500 hover:text-purple-400 hover:underline">← Prev</button>
              </Link>
            )}
            <span className="pt-0.5 mx-auto font-bold text-2xl text-black dark:text-white">{currentPage}</span>
            {!isLast && (
              <Link to={nextPage} rel="next">
                <button className="absolute right-4 sm:right-20 font-bold text-2xl text-green-500 hover:text-purple-400 hover:underline">Next →</button>
              </Link>
            )}
          </div>

          <Footer></Footer>
        </div>
      </ThemeProvider>
    )
  }
  
}

export const pageQuery = graphql `
  query blogListQuery($skip: Int!, $limit: Int!) {
    blog: allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: {
        frontmatter: { layout: { eq: "blog-post" } }
      }
    ) {
      posts: nodes {
        fields {
          slug
          readingTime {
            minutes
            text
          }
        }
        frontmatter {
          date(formatString: "MMMM YYYY")
          title 
          category
          description
        }
        excerpt(pruneLength: 80)
        id
      }
    }
  }
`