import React from "react"
import "./BlogContentLayout.css"

const BlogContentLayout = props => {
  const { children } = props

  return (
    <div className="BlogContentLayout container mx-auto py-8 lg:py-24 px-8 flex justify-center">
      {children}
    </div>
  )
}

export default BlogContentLayout
