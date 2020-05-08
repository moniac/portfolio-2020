import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BlogLayout from "../Layouts/BlogLayout"
import GradientHeading from "../components/GradientHeading/GradientHeading"
import { motion, AnimatePresence } from "framer-motion"
import ZeroState from '../images/blog_empty_state.svg'

const variants = {
  visible: i => ({
    opacity: 1,
    transform: "rotate(0deg) scale(1)",
    transition: {
      delay: i * 0.1,
    },
    filter: "grayscale(0)",
  }),
  hidden: {
    opacity: 0,
    transform: "rotate(0) scale(0.6)",
    filter: "grayscale(1)",
  },
}

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
        <GradientHeading>
          Recent <br /> posts
        </GradientHeading>
        <label>
          Search
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-8
    text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-sm flex"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </label>
        {renderBlogPostsORZeroState(allPosts)}
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
          excerpt(truncate: false, pruneLength: 100)
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

function renderBlogPostsORZeroState(allPosts) {
  if (allPosts.length) {
    return renderBlogPosts(allPosts)
  }

  return renderZeroState()
}

function renderZeroState() {
  return <img className="max-w-xs mx-auto my-16" src={ZeroState} />
}

function renderBlogPosts(allPosts) {
  return (
  <ul className="grid md:grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
    <AnimatePresence>
      {allPosts.map(({ node: post }, i) => (<motion.li key={post.id} custom={i} initial="hidden" animate="visible" variants={variants} positionTransition={true} exit={{ opacity: 0, filter: "grayscale(1)" }} className="w-full">
        <Link to={post.fields.slug}>
          <div className="max-w-sm w-full rounded rounded-lg overflow-hidden shadow-xl flex flex-col h-full">
            <img className="w-full shadow-none rounded-none" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {post.frontmatter.title}
              </div>
              <p className="text-gray-700 text-base">{post.excerpt}</p>
            </div>
          </div>
        </Link>
      </motion.li>))}
    </AnimatePresence>
  </ul>
  )
}

