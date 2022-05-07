import React from 'react';
import './countryCard.scss';

const CountryCard = ({ flag, country, population, region, capital }) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
        <div className=' country__card'>
            <div className='inner__card'>
                <div className='inner__card-img'>
                    <img src={flag} alt='' />
                </div>
                <div className='inner__card__body'>
                    <h4 className='inner__card__body-title fw-bold spacing-2'>
                        <span> {country}</span>
                    </h4>
                    <p className='m-0 inner__card__body-population'>
                        Population :<span> {numberWithCommas(population)}</span>
                    </p>
                    <p className='m-0 inner__card__body-region'>
                        Region :<span> {region}</span>
                    </p>
                    <p className='m-0 inner__card__body-capital'>
                        Capital :<span> {capital}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;
