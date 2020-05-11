import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import GradientHeading from "../components/GradientHeading/GradientHeading"
import PortfolioCard from "../components/PortfolioCard/PortfolioCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio | Mohammed Mulazada" />
    <Header />
    <div className="px-10 pt-16">
    <GradientHeading headingLevel={2}>
      My <br /> work
    </GradientHeading>
    </div>

    <div className="grid md:grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
    </div>
  </Layout>
)

export default IndexPage
