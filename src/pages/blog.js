import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import BlogLayout from '../Layouts/BlogLayout';
import GradientHeading from '../components/GradientHeading/GradientHeading';
import { motion, AnimatePresence } from 'framer-motion';
import ZeroState from '../images/blog_empty_state.inline.svg';
import BlogPostCard from '../components/BlogPost/BlogPostCard';

const variants = {
  visible: i => ({
    opacity: 1,
    transform: 'rotate(0deg) scale(1)',
    transition: {
      delay: i * 0.1,
    },
  }),
  hidden: {
    opacity: 0,
    transform: 'rotate(0) scale(0.6)',
  },
};

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx;
  const [allPosts, setAllPosts] = useState(() => posts);

  const handleChange = e => {
    const value = e.currentTarget.value;

    if (!value) {
      setAllPosts(posts);
      return;
    }

    const formattedSearch = value.toLowerCase().trim();

    const filteredPosts = posts.filter(post =>
      post.node.frontmatter.title.toLowerCase().trim().includes(formattedSearch)
    );

    if (filteredPosts.length === 0) {
      setAllPosts([]);
      return;
    }

    const isSame = allPosts.every(
      (o, i) => o.node.id === filteredPosts[i].node.id
    );

    if (isSame) {
      return;
    }

    setAllPosts(filteredPosts);
    return;
  };

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
              onChange={handleChange}
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
  return (
    <ul className="grid md:grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
      <AnimatePresence>
        {allPosts.map(({ node: post }, i) => (
          <motion.li
            key={post.id}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={variants}
            positionTransition={true}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            <Link
              key={post.fields.slug}
              to={post.fields.slug}
              aria-label={`Go to blog post about ${post.frontmatter.title}`}
            >
              <BlogPostCard
                title={post.frontmatter.title}
                excerpt={post.excerpt}
                img={post.frontmatter.featuredImage.childImageSharp.fluid}
              />
            </Link>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
