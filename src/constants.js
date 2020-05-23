import redWaves from './images/redwaves.svg';
import blueWaves from './images/bluewaves.svg';

export const COLORS = {
  text: {
    light: 'black', // white
    dark: 'white', // near-black
  },
  background: {
    light: 'hsl(0deg, 0%, 100%)', // white
    dark: '#121212', // navy navy blue
  },
  backgroundHighlight: {
    light: '#fff',
    dark: 'hsl(210deg, 38%, 15%)',
  },
  darkModeTogle: {
    light: 'rgba(51, 51, 51, 1)',
    dark: 'rgba(255, 255, 255, 1)',
  },
  codeBlock: {
    light: 'hsl(225deg, 16%, 90%)',
    dark: 'hsl(210deg, 38%, 15%)',
  },
  primary: {
    light: 'hsl(340deg, 100%, 40%)', // Pinkish-red
    dark: 'hsl(50deg, 100%, 50%)', // Yellow
  },
  secondary: {
    light: 'hsl(250deg, 100%, 50%)', // Purplish-blue
    dark: 'hsl(190deg, 100%, 40%)', // Cyan
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
    light: 'hsl(0deg, 0%, 70%)',
    dark: 'hsl(0deg, 0%, 30%)',
  },
  gray500: {
    light: 'hsl(0deg, 0%, 50%)',
    dark: 'hsl(0deg, 0%, 50%)',
  },
  gray700: {
    light: 'hsl(0deg, 0%, 30%)',
    dark: 'hsl(0deg, 0%, 70%)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
