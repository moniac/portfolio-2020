import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header/Header"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio | Mohammed Mulazada" />
    <Header />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
