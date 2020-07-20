import React from 'react';
import containerStyles from './GridLayout.module.css';

export default props => {
  return <div className={containerStyles.GridLayout}>{props.children}</div>;
};
