import redWaves from './images/redwaves.svg';
import blueWaves from './images/bluewaves.svg';

export const COLORS = {
  text: {
    light: 'black', // white
    dark: 'white', // near-black
  },
  background: {
    light: '#ffffff', // white
    dark: '#121212', // navy navy blue
  },
  backgroundHighlight: {
    light: '#ffffff',
    dark: '#182635',
  },
  darkModeToggle: {
    light: '#333333',
    dark: '#ffffff',
  },
  codeBlock: {
    light: 'hsl(225, 16%, 90%)',
    dark: '#182635',
  },
  primary: {
    light: 'hsl(340, 100%, 40%)', // Pinkish-red
    dark: 'hsl(50, 100%, 50%)', // Yellow
  },
  secondary: {
    light: 'hsl(250, 100%, 50%)', // Purplish-blue
    dark: 'hsl(190, 100%, 40%)', // Cyan
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
  // Grays, scaling from least-noticeable to most-noticeable
  gray300: {
    light: 'hsl(0, 0%, 70%)',
    dark: 'hsl(0, 0%, 30%)',
  },
  gray500: {
    light: 'hsl(0, 0%, 50%)',
    dark: 'hsl(0, 0%, 50%)',
  },
  gray700: {
    light: 'hsl(0, 0%, 30%)',
    dark: 'hsl(0, 0%, 70%)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
