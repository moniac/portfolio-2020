import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import BlogLayout from '../Layouts/BlogLayout';
import GradientHeading from '../components/GradientHeading/GradientHeading';
import { BlogSearchContainer } from '../components/BlogPost/BlogSearchContainer';

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <BlogLayout>
        <GradientHeading>
          Recent <br /> posts
        </GradientHeading>
        <BlogSearchContainer posts={posts} />
      </BlogLayout>
    </Layout>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx(filter: { fields: { instance: { eq: "blog" } } }) {
      edges {
        node {
          id
          excerpt(truncate: false, pruneLength: 100)
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400, quality: 60) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
export default BlogIndex;
