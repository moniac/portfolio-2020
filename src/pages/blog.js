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
        <GradientHeading>
          Recent <br /> posts
        </GradientHeading>
        <label>
          Search
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-8
    text-gray-700 leading-tight focus:outline-none :shadow-outline max-w-sm flex "
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </label>
        <ul className="grid md:grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
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
                className="w-full"
              >
                <Link to={post.fields.slug}>
                  <div className="max-w-sm w-full rounded rounded-lg overflow-hidden shadow-xl flex flex-col h-full">
                    <img
                      className="w-full shadow-none rounded-none"
                      src="https://tailwindcss.com/img/card-top.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {post.frontmatter.title}
                      </div>
                      <p className="text-gray-700 text-base">{post.excerpt}</p>
                    </div>
                  </div>

                  {/* <div className="flex flex-col h-full">
                    <div class="relative pb-5/6">
                      <img
                        class="h-full w-full object-cover rounded-lg shadow-md"
                        src="https://tailwindcss.com/img/card-top.jpg"
                        alt="Sunset in the mountains"
                      />
                    </div>
                    <div class="relative px-4 -mt-16 h-full">
                      <div class="bg-white p-6 rounded-lg shadow-lg h-full">
                        <div class="flex items-baseline">
                          <span class="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                            New
                          </span>
                        </div>
                        <h4 class="mt-1 font-semibold text-lg leading-tight truncate">
                          {post.frontmatter.title}
                        </h4>
                        <div class="mt-1">{post.excerpt}</div>
                      </div>
                    </div>
                  </div> */}
                </Link>
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
