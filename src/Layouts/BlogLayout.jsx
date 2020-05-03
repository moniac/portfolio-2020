import React from "react"

const BlogLayout = props => {
  const { children } = props
  return (
    <div className="container mx-auto max-w-2xl py-8 lg:py-24 px-8">
      {children}
    </div>
  )
}

export default BlogLayout
