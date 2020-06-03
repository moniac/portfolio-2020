import { Link } from 'gatsby';
import React from 'react';
import containerStyles from './Nav.module.css';
import Progress from '../Progress/Progress';
import AnimatedDarkModeToggler from '../DarkModeToggler/AnimatedDarkModeToggler';

const Nav = props => {
  const { links, showProgressBar } = props;

  return (
    <nav
      className={
        containerStyles.Nav + ' border-bottom-blue-500 border-opacity-75'
      }
    >
      <ul className="px-8">
        {links.map(({ link, name, partiallyActive }) => (
          <li className="inline-block" key={`${name} - ${link}`}>
            <Link
              className="inline-block py-4"
              activeClassName="active"
              to={link}
              partiallyActive={partiallyActive}
            >
              {name}
            </Link>
          </li>
        ))}

        <li className="inline-block">
          <AnimatedDarkModeToggler />
        </li>
      </ul>
      {showProgressBar && <Progress />}
    </nav>
  );
};

export default Nav;
