import React from 'react'
import containerStyles from './PortfolioCard.module.css'

const PortfolioCard = props => {

    return (
        <div className={`${containerStyles.PortfolioCard} flex w-full justify-center items-center hover:shadow-outline focus:shadow-outline`}>
            {/* <p className={`${containerStyles.PortfolioCard__description}`}>test</p> */}
            {/* <img src="https://ruler.nl/app/themes/ruler/dist/images/ruler-logo_d1ce0e5f.svg" /> */}
            {/* <div className={`${containerStyles.ocean} ocean`}>
                <div className="wave"></div>
                <div className="wave"></div>
            </div> */}
        </div>
    )
}

export default PortfolioCard