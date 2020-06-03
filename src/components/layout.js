import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Seo from '../components/seo';

import Nav from '../components/Nav/Nav';
import './layout.css';

const Links = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Blog',
    link: '/blog',
    partiallyActive: true,
  },
];

const Layout = ({ children, showProgressBar }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Seo {...data.site.siteMetadata} />
      <Nav links={Links} showProgressBar={showProgressBar} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
