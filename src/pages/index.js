import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import GradientHeading from "../components/GradientHeading/GradientHeading"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio | Mohammed Mulazada" />
    <Header />
    <GradientHeading headingLevel={2}>
      My <br /> work
    </GradientHeading>
  </Layout>
)

export default IndexPage
