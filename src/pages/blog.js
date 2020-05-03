import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BlogLayout from "../Layouts/BlogLayout"
import GradientHeading from "../components/GradientHeading/GradientHeading"

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  const [allPosts, setAllPosts] = useState(posts)
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (search.length > 0) {
      const formattedSearch = search.toLowerCase().trim()

      const filteredPosts = posts.filter(post =>
        post.node.frontmatter.title
          .toLowerCase()
          .trim()
          .includes(formattedSearch)
      )

      setAllPosts(filteredPosts)
      return
    }

    setAllPosts(posts)
  }, [search, posts])

  return (
    <Layout>
      <BlogLayout>
        <GradientHeading>Recent posts</GradientHeading>
        <label>
          Search
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-8
    text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </label>
        <ul>
          {allPosts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.fields.slug}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </BlogLayout>
    </Layout>
  )
}
export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
export default BlogIndex
