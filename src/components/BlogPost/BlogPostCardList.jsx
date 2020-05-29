import React from 'react';
import BlogPostCard from './BlogPostCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'gatsby';

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

export const BlogPostCardList = props => {
  const { posts } = props;

  return (
    <ul className="grid md:grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
      <AnimatePresence>
        {posts.map(({ node: post }, i) => (
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
              aria-label={`Go to the blog post about ${post.frontmatter.title}`}
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
};

export const MemoizedBlogPostCardList = React.memo(
  BlogPostCardList,
  (prevProps, nextProps) => {
    if (everyItemIsTheSame(prevProps, nextProps)) {
      return true;
    }

    return false;
  }
);

function everyItemIsTheSame(prevProps, nextProps) {
  const isSame = prevProps.posts.every((post, i) => {
    return post.id === nextProps.posts.id;
  });

  return isSame;
}
