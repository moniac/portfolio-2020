import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import GradientHeading from "../components/GradientHeading/GradientHeading"
import Layout from "../components/layout"
import Code from "../components/Code"
import theme from "prism-react-renderer/themes/nightOwl"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import BlogContentLayout from "../Layouts/BlogContentLayout"
import Slugger from "github-slugger"

const slugger = new Slugger()

const LiveCode = props => (
  <LiveProvider code={props.children.props.children.trim()} theme={theme}>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
)

const shortcodes = { Link } // Provide common components here

const replacedComponents = {
  pre: preProps => {
    if (preProps.children.props["react-live"]) {
      return <LiveCode {...preProps} />
    }
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
  slugger.reset()
  console.log(mdx)
  return (
    <Layout>
      <BlogContentLayout>
        <MDXProvider components={allComponents}>
          <div className="blog-content flex-1 ">
            <GradientHeading>{mdx.frontmatter.title}</GradientHeading>
            <MDXRenderer headings={mdx.headings}>{mdx.body}</MDXRenderer>
          </div>
        </MDXProvider>
        {Boolean(mdx.headings.length) && (
          <aside className="blog-sidebar hidden lg:block overflow-auto pl-40 sticky">
            <ul>
              <li className="mb-4 text-2xl">
                <b>Table of Contents</b>
              </li>
              {mdx.headings.map((heading, i) => (
                <li key={`${heading.value} - ${i}`}>
                  <Link
                    to={`${mdx.fields.slug}#${slugger.slug(heading.value)}`}
                  >
                    {heading.value}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </BlogContentLayout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }, fields: {instance: {eq: "blog"}}) {
      id
      body
      tableOfContents
      headings {
        depth
        value
      }
      fields {
        slug
        instance
      }
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
