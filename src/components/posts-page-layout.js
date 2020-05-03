import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import GradientHeading from "../components/GradientHeading/GradientHeading"
import Layout from "./layout"
import BlogLayout from "../Layouts/BlogLayout"
import Code from "../components/Code"

const shortcodes = { Link } // Provide common components here

const replacedComponents = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
  h1: props => <GradientHeading headingLevel={1} {...props} />,
  //   h2: props => <GradientHeading headingLevel={2} {...props} />,
  //   h3: props => <GradientHeading headingLevel={3} {...props} />,
  //   h4: props => <GradientHeading headingLevel={4} {...props} />,
  //   h5: props => <GradientHeading headingLevel={5} {...props} />,
  //   h6: props => <GradientHeading headingLevel={6} {...props} />,
}

const allComponents = { ...shortcodes, ...replacedComponents }

export default function PageTemplate({ data: { mdx } }) {
  console.log(mdx)
  return (
    <Layout>
      <BlogLayout>
        <GradientHeading>{mdx.frontmatter.title}</GradientHeading>
        <MDXProvider components={allComponents}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </BlogLayout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

function preToCodeBlock(preProps) {
  if (
    // children is code element
    preProps.children &&
    // code props
    preProps.children.props &&
    // if children is actually a <code>
    preProps.children.props.mdxType === "code"
  ) {
    // we have a <pre><code> situation
    const {
      children: codeString,
      className = "",
      ...props
    } = preProps.children.props

    const matches = className.match(/language-(?<lang>.*)/)

    return {
      codeString: codeString.trim(),
      className,
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : "",
      ...props,
    }
  }
}
