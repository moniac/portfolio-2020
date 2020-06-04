import React from 'react';
import containerStyles from './Header.module.css';
import { Link } from 'gatsby';
import MoniacLogo from '../../images/mo_logo.inline.svg';
import ThreeCube from '../3d/experimentation/cube/ThreeCube';
import EarthGlobe from '../3d/experimentation/earth/EarthGlobe';

const Header = () => {
  return (
    <header className={`${containerStyles.Header} p-10`}>
      <div>
        <Link
          className={`${containerStyles.Logo} flex items-start`}
          to="/"
          aria-label="Go back to the homepage"
        >
          <p className="hidden">Go back to the homepage</p>
          <MoniacLogo
            className={containerStyles.MoniacLogo}
            alt="The personal logo of Mohammed Mulazada"
          />
          <aside className="ml-4 mb-2">
            <h1 className="text-base whitespace-no-wrap">Mohammed Mulazada</h1>
            <h2 className="text-base whitespace-no-wrap font-normal">
              Front-end Developer
            </h2>
          </aside>
        </Link>

        <div className="-ml-2 mt-8">
          <h2>Welcome</h2>
          <p className="max-w-sm font-normal">
            This is the portfolio of Mohammed Mulazada, a Web Developer based in
            Amsterdam.
          </p>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          zIndex: 1,
          // right: 0,
        }}
      >
        <ThreeCube />
        {/* <EarthGlobe /> */}
      </div>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </header>
  );
};

export default Header;
