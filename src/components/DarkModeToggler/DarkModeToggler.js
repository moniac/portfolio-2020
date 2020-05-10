import React from 'react';
import gradientMoon from '../../images/icons8-moon-and-stars-96.png'
import gradientSun from '../../images/icons8-smiling-sun-96.png'
import sunIcon from '../../images/icons8-sun-96.png'
import moonIcon from '../../images/icons8-crescent-moon-96.png'
import containerStyles from './DarkModeToggler.module.css'

import { ThemeContext } from '../ThemeContext';

const DarkModeToggler = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <label className={containerStyles.DarkModeToggler}>
      <input
        type="checkbox"
        checked={colorMode === 'dark'}
        onChange={ev => {
          setColorMode(ev.target.checked ? 'dark' : 'light');
        }}
      />
      <img alt={colorMode === 'dark' ? 'A moon icon to toggle the websites dark mode' : 'A sun icon to toggle the websites dark mode'} src={colorMode === 'dark' ? gradientMoon : gradientSun}/>
    </label>
  );
};

export default DarkModeToggler;