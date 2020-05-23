import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Seo from '../components/seo';

import Nav from '../components/Nav/Nav';
import './layout.css';
import Progress from './Progress/Progress';

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
