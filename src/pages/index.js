import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/Header/Header';
import GradientHeading from '../components/GradientHeading/GradientHeading';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import { graphql } from 'gatsby';

const IndexPage = props => {
  const allWork = props.data.allWork.edges;

  return (
    <Layout>
      <SEO title="Portfolio" />
      <Header />

      <div className="max-w-screen-xl mx-auto">
        <div className="px-10 pt-16">
          <GradientHeading headingLevel={2}>
            My <br /> work
          </GradientHeading>
        </div>

        <div className="grid md:grid-flow-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-8">
          {renderWorkPosts(allWork)}
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query workIndex {
    allWork: allMdx(filter: { fields: { instance: { eq: "work" } } }) {
      edges {
        node {
          id
          excerpt(truncate: false, pruneLength: 100)
          frontmatter {
            title
            togetherWith
            togetherWithUrl
            excerpt
            workUrl
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;

function renderWorkPosts(allWork) {
  return allWork.map((input, i, allWork, { node: work } = input) => (
    <PortfolioCard
      key={`${work.frontmatter.title} - ${i}`}
      {...work.frontmatter}
    />
  ));
}
