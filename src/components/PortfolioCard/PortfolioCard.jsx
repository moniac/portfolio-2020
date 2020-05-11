import React from 'react'
import containerStyles from './PortfolioCard.module.css'

const PortfolioCard = props => {

    return (
        <div className={`${containerStyles.PortfolioCard} p-8 flex flex-col justify-between w-full hover:shadow-outline focus:shadow-outline`}>
            <div className="flex flex-col">
                <h4>Blank</h4>
                <p>Together with: Company</p>
            </div>

            <div>
                <p className="italic">Blank is a website about. About two sentences.</p>
            </div>
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