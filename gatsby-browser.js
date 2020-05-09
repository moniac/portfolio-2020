import React from 'react';

import App from './src/Layouts/App';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};