import React from "react"
import Img from "gatsby-image"

const BlogPostCard = props => {
  const { title, img, excerpt } = props

  return (
    <article className="max-w-sm w-full rounded rounded-lg overflow-hidden shadow-xl flex flex-col h-full">
      <Img alt="" className="w-full shadow-none rounded-none" fluid={img} />
      <section className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{excerpt}</p>
      </section>
    </article>
  )
}

export default BlogPostCard
