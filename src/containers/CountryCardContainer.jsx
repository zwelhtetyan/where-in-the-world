import React from 'react';
import './countryCardContainer.scss';
import { ClipLoader } from 'react-spinners';
import CountryCard from '../components/countryCard/CountryCard';
import { Link } from 'react-router-dom';

const CountryCardContainer = ({ darkMode, data, loading, err, noCountry }) => {
    const color = darkMode ? 'white' : 'black';

    return (
        <div className='country_card_container container-fluid px-md-5 px-3'>
            {err && <div className='err-message-container'>{err + '🥺'}</div>}
            {noCountry && (
                <div className='err-message-container'>
                    {'Sorry! there are no countries you searched 🥺'}
                </div>
            )}

            {loading && (
                <div className='loader_container'>
                    <ClipLoader color={color} loading={loading} />
                </div>
            )}

            <div className='row'>
                {data &&
                    data.map((data) => (
                        <div
                            key={data.alpha3Code}
                            className='col-sm-6 col-lg-4 col-xl-3'
                        >
                            <Link
                                to={data.alpha3Code}
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
        </div>
    );
};

export default CountryCardContainer;
