import React from 'react';

import App from './src/Layouts/App';
require('typeface-open-sans');

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
