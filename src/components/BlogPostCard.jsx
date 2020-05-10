import React from 'react'
import Img from 'gatsby-image'

const BlogPostCard = props => {
    const { title, img, excerpt } = props

    return (
        <div className="max-w-sm w-full rounded rounded-lg overflow-hidden shadow-xl flex flex-col h-full">
            <Img alt='' className="w-full shadow-none rounded-none" fluid={img} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {title}
              </div>
              <p className="text-gray-700 text-base">{excerpt}</p>
            </div>
        </div>
    )
}

export default BlogPostCard