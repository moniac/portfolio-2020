import React from 'react';
import Img from 'gatsby-image';
import containerStyles from './BlogPostCard.module.css';

const BlogPostCard = React.memo(
  props => {
    const { title, img, excerpt } = props;

    return (
      <article
        className={
          containerStyles.BlogPostCard +
          ' max-w-sm w-full rounded rounded-lg overflow-hidden shadow-xl flex flex-col h-full'
        }
      >
        <Img alt="" className="w-full shadow-none rounded-none" fluid={img} />
        <section className={containerStyles.BlogPostBody + ' px-6 py-4'}>
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p className="text-base">{excerpt}</p>
        </section>
      </article>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.id === nextProps.id) {
      return true;
    }

    return false;
  }
);

export default BlogPostCard;
