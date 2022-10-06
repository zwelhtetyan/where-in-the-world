import React from 'react';
import { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import './countryCardDetails.scss';

const CountryCardDetails = ({
   data,
   flag,
   country,
   nativeName,
   population,
   region,
   subRegion,
   capital,
   domain,
   currency,
   language,
   borders,
}) => {
   // scroll top
   useEffect(() => window.scrollTo(0, 0));

   function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   }

   const navigate = useNavigate();

   const getCurrencies = (currency) => {
      return currency.map((c) => c.name).join(',');
   };

   const getBorderCountries = (borders) => {
      const borderingCountriesPNG = [];
      const countries = borders.map((c) => c);
      countries.forEach((country) => {
         data.forEach((data) => {
            if (data.alpha3Code === country) {
               borderingCountriesPNG.push({
                  flag: data.flags.png,
                  alpha3Code: data.alpha3Code,
               });
            }
         });
      });
      return borderingCountriesPNG;
   };

   return (
      <div className='detail__card'>
         <div className='back__button' onClick={() => navigate(-1)}>
            <BiArrowBack /> Back
         </div>
         <div className='inner__card container-fluid p-0'>
            <div className='row w-100 align-item-center m-0'>
               <div className='inner__card__img col-md-6 mb-5 mb-md-0'>
                  <img src={flag} alt='' />
               </div>
               <div className='inner__card__body col-md-6'>
                  <h3 className='inner__card-title align-self-start align-self-md-center'>
                     {country}
                  </h3>
                  <div className='row align-self-start w-100'>
                     <div className='inner__card__body__left col-md-6 mb-3 mb-md-0'>
                        <p className='mb-2 inner__card__native-name'>
                           Native Name : <span>{nativeName}</span>
                        </p>
                        <p className='mb-2 inner__card__population'>
                           Population :{' '}
                           <span>{numberWithCommas(population)}</span>
                        </p>
                        <p className='mb-2 inner__card__region'>
                           Region : <span>{region}</span>
                        </p>
                        <p className='mb-2 inner__card__sub-region'>
                           Sub Region : <span>{subRegion}</span>
                        </p>
                        <p className='mb-2 inner__card__capital'>
                           Capital : <span>{capital}</span>
                        </p>
                     </div>
                     <div className='inner__card__body__right col-md-6 mb-3 mb-md-0'>
                        <p className='mb-2 inner__card__domain'>
                           Top Level Domain : <span>{domain}</span>
                        </p>
                        <p className='mb-2 inner__card__currency'>
                           Currencies :{' '}
                           <span>
                              {currency
                                 ? getCurrencies(currency)
                                 : 'no currency'}
                           </span>
                        </p>
                        <p className='mb-2 inner__card__language'>
                           Languages : <span>{language}</span>
                        </p>
                     </div>
                  </div>
                  <div className='row justify-content-flex-start w-100'>
                     <div className='border__countries p-0'>
                        {borders && (
                           <span className='text-center d-block mb-1'>
                              Border Countries
                           </span>
                        )}
                        <div className='d-flex align-item-center justify-content-center flex-wrap'>
                           {borders ? (
                              getBorderCountries(borders).map((obj) => (
                                 <Link
                                    key={obj.alpha3Code}
                                    to={`/${obj.alpha3Code}`}
                                 >
                                    <img
                                       src={obj.flag}
                                       className='border__country'
                                       alt='border__country'
                                    />
                                 </Link>
                              ))
                           ) : (
                              <span
                                 style={{
                                    fontWeight: '300',
                                    letterSpacing: '1px',
                                    textTransform: 'capitalize',
                                    fontSize: '13px',
                                 }}
                              >
                                 no bordering countries
                              </span>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CountryCardDetails;
