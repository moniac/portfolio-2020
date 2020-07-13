import React from 'react';
import GradientHeading from '../GradientHeading/GradientHeading';
import containerStyles from './BlogHeader.module.css';

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const BlogHeader = props => {
  const { title, date, timeToRead } = props;
  const formatted = new Date(date + '').toLocaleDateString('en-EN', options);

  return (
    <header className={containerStyles.BlogHeader}>
      <GradientHeading>{title}</GradientHeading>
      <p>Written by Mohammed 'Mo' Mulazada</p>
      <p>
        <time dateTime={date}>{formatted}</time>
      </p>
      <p>Approximately {timeToRead} minutes</p>
    </header>
  );
};
