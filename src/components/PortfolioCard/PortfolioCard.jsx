import React from 'react'
import containerStyles from './PortfolioCard.module.css'
import { Link } from 'gatsby'

const PortfolioCard = props => {

    return (
        <div className={`${containerStyles.PortfolioCard} p-8 flex flex-col justify-between w-full hover:shadow-outline focus:shadow-outline`}>
            <div className="flex flex-col">
                <h4>Blank</h4>
                <p className="font-hairline opacity-75">Together with: Company</p>
            </div>

            <div className={containerStyles.description}>
                <p className="italic">Blank is a website about. About two sentences.</p>
            </div>
            <div className={`${containerStyles.ocean} ocean`}>
                <div className={`${containerStyles.wave} wave`}></div>
                <div className={`${containerStyles.wave} wave`}></div>
            </div>

            <Link className={containerStyles.readmore}>
                Read more
            </Link>
        </div>
    )
}

export default PortfolioCard