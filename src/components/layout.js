import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/seo"

import Nav from "../components/Nav/Nav"
import "./layout.css"

const Links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "blog",
    partiallyActive: true,
  },
]

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Seo {...data.site.siteMetadata} />
      <Nav links={Links} />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
