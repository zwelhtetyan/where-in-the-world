import React from 'react';
import './countryCardContainer.scss';
import CountryCard from '../components/countryCard/CountryCard';
import { Link } from 'react-router-dom';

const CountryCardContainer = ({ data, noCountry }) => {
    if (data === null) {
        data = [];
    }

    return (
        <div className='country_card_container container-fluid px-md-5 px-3'>
            {noCountry && (
                <div className='no_country_err-message-container'>
                    {'Sorry!🥺 there are no countries you search.'}
                </div>
            )}

            {data.length !== 0 && (
                <div className='row'>
                    {data.map((data) => (
                        <div
                            key={data.alpha3Code}
                            className='col-sm-6 col-lg-4 col-xl-3'
                        >
                            <Link
                                to={`/${data.alpha3Code}`}
                                className=' country-card-link'
                            >
                                <CountryCard
                                    flag={data.flags.png}
                                    country={data.name}
                                    population={data.population}
                                    region={data.region}
                                    capital={data.capital}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CountryCardContainer;
