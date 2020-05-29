import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import BlogLayout from '../Layouts/BlogLayout';
import GradientHeading from '../components/GradientHeading/GradientHeading';

import ZeroState from '../images/blog_empty_state.inline.svg';

import { MemoizedBlogPostCardList } from '../components/BlogPost/BlogPostCardList';

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx;
  const [allPosts, setAllPosts] = useState(() => posts);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search.length > 0) {
      const formattedSearch = search.toLowerCase().trim();

      const filteredPosts = posts.filter(post =>
        post.node.frontmatter.title
          .toLowerCase()
          .trim()
          .includes(formattedSearch)
      );

      setAllPosts(filteredPosts);
      return;
    }

    setAllPosts(posts);
  }, [search]);

  return (
    <Layout>
      <BlogLayout>
        <GradientHeading>
          Recent <br /> posts
        </GradientHeading>
        <form role="search">
          <label>
            Search
            <input
              aria-label="On this page"
              name="search"
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-8
    text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-sm flex"
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </label>
        </form>
        {renderBlogPostsORZeroState(allPosts)}
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

function renderBlogPostsORZeroState(allPosts) {
  if (allPosts.length) {
    return renderBlogPosts(allPosts);
  }

  return renderZeroState();
}

function renderZeroState() {
  return (
    <ZeroState
      alt="No blog posts found image"
      className="max-w-xs mx-auto my-16"
    />
  );
}

function renderBlogPosts(allPosts) {
  return <MemoizedBlogPostCardList posts={allPosts} />;
}
