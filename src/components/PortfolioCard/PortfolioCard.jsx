import React from 'react';
import containerStyles from './PortfolioCard.module.css';
import { Link } from 'gatsby';

const PortfolioCard = props => {
  const { title, togetherWith, togetherWithUrl, excerpt, workUrl } = props;

  return (
    <div
      className={`${containerStyles.PortfolioCard} p-8 flex flex-col justify-between w-full hover:shadow-outline focus:shadow-outline`}
    >
      <div className="flex flex-col">
        <h4>{title}</h4>
        {togetherWith && (
          <p className="font-hairline opacity-75">
            Together with:{' '}
            <a
              href={togetherWithUrl}
              target={'__blank'}
              className={'hover:text-blue'}
            >
              {togetherWith}
            </a>
          </p>
        )}
      </div>

      <div className={containerStyles.description}>
        <p className="italic">{excerpt}</p>
      </div>
      <div className={`${containerStyles.ocean} ocean`}>
        <div className={`${containerStyles.wave} wave`}></div>
        <div className={`${containerStyles.wave} wave`}></div>
      </div>

      <a className={containerStyles.readmore} href={workUrl} target={'__blank'}>
        Visit
      </a>
    </div>
  );
};

export default PortfolioCard;
