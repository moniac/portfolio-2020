import React, { useEffect, useRef } from 'react';
import containerStyles from './Progress.module.css';

var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight',
  scroll;

const Progress = props => {
  const progressBar = useRef(null);

  function update() {
    scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
    progressBar.current.style.setProperty('--scroll', scroll + '%');
  }

  useEffect(() => {
    document.addEventListener('scroll', update);

    return () => document.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      ref={progressBar}
      id="reading-progress"
      className={containerStyles.Progress}
    ></div>
  );
};

export default Progress;
