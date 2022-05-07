import React from 'react';
import UseFetch from '../hooks/UseFetch';
import './countryCardContainer.scss';
import { ClipLoader } from 'react-spinners';

const CountryCardContainer = ({ darkMode }) => {
    const [data, loading, err] = UseFetch('https://restcountries.com/v2/all');

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    const color = darkMode ? 'white' : 'black';

    return (
        <div className='country_card_container container-fluid px-md-5 px-3'>
            {err && <div className='err-message-container'>{err + '🥺'}</div>}

            {loading && (
                <div className='loader_container'>
                    <ClipLoader color={color} loading={loading} />
                </div>
            )}

            <div className='row'>
                {data &&
                    data.data.map((data) => (
                        <div
                            className='col-sm-6 col-lg-4 col-xl-3 country__card'
                            key={data.alpha3Code}
                        >
                            <div className='inner__card'>
                                <div className='inner__card-img'>
                                    <img src={data.flags.png} alt='' />
                                </div>
                                <div className='inner__card__body'>
                                    <h4 className='inner__card__body-title fw-bold spacing-2'>
                                        <span> {data.name}</span>
                                    </h4>
                                    <p className='m-0 inner__card__body-population'>
                                        Population :
                                        <span>
                                            {' '}
                                            {numberWithCommas(data.population)}
                                        </span>
                                    </p>
                                    <p className='m-0 inner__card__body-region'>
                                        Region :<span> {data.region}</span>
                                    </p>
                                    <p className='m-0 inner__card__body-capital'>
                                        Capital :<span> {data.capital}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CountryCardContainer;
