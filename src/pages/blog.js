import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BlogLayout from "../Layouts/BlogLayout"
import GradientHeading from "../components/GradientHeading/GradientHeading"
import { motion, AnimatePresence } from "framer-motion"

const Li = motion.li

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  const [allPosts, setAllPosts] = useState(posts)
  const [search, setSearch] = useState("")

  const variants = {
    visible: i => ({
      opacity: 1,
      transform: "rotate(0deg)",
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0, transform: "rotate(-4deg)" },
  }

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

  console.log(allPosts)

  return (
    <Layout>
      <BlogLayout>
        <GradientHeading>Recent posts</GradientHeading>
        <label>
          Search
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-8
    text-gray-700 leading-tight focus:outline-none :shadow-outline"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </label>
        <ul>
          <AnimatePresence>
            {allPosts.map(({ node: post }, i) => (
              <motion.li
                key={post.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={variants}
                positionTransition={true}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.225 }}
              >
                <Link to={post.fields.slug}>
                  <h2>{post.frontmatter.title}</h2>
                </Link>
                <p>{post.excerpt}</p>
              </motion.li>
            ))}
          </AnimatePresence>
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
