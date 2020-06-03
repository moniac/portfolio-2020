import redWaves from './images/redwaves.svg';
import blueWaves from './images/bluewaves.svg';

export const COLORS = {
  text: {
    light: 'black', // white
    dark: 'white', // near-black
  },
  background: {
    light: '#ffffff', // white
    dark: '#000000', // navy navy blue
  },
  backgroundHighlight: {
    light: '#ffffff',
    dark: '#182635',
  },
  headerBackground: {
    light: 'hsla(0,0%,100%,0.8)',
    dark: 'hsla(0,0%,0%,0.8)',
  },
  progress: {
    light: '#f15b74',
    dark: '#21b3ff',
  },
  darkModeToggle: {
    light: '#333333',
    dark: '#ffffff',
  },
  codeBlock: {
    light: 'hsl(225, 16%, 90%)',
    dark: '#182635',
  },
  radialGradient: {
    dark: 'linear-gradient(180deg, #5b5cf1, #21b3ff)',
    light: 'linear-gradient(to bottom, #f15b74, #ff6021)',
  },
  radialWaves: {
    dark: `url(${blueWaves}) repeat-x`,
    light: `url(${redWaves}) repeat-x`,
  },
  radialCoverBackground: {
    light: '#f15b74',
    dark: '#5b5cf1',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
