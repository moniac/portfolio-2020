import React, { useState, useEffect } from 'react';
import ZeroState from '../../images/blog_empty_state.inline.svg';
import { MemoizedBlogPostCardList } from './BlogPostCardList';

export const BlogSearchContainer = props => {
  const { posts } = props;

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
  }, [search, posts]);

  return (
    <>
      <form role="search" onSubmit={event => event.preventDefault()}>
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
    </>
  );
};

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
