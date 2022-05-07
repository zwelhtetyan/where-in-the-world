import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import axios from 'axios';
import { Navbar, Header } from './components';
import CountryCardContainer from './containers/CountryCardContainer';
import CountryCardDetails from './components/countryCard/CountryCardDetails';

export const filterCountryContext = createContext();
export const filterCountryByRegionContext = createContext();

const App = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme')
            ? localStorage.getItem('theme') === 'true'
            : true
    );

    const [data, setData] = useState(null);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userSearchWord, setUserSearchWord] = useState('');
    const [filteredCountriesByRegion, setFilteredCountriesByRegion] =
        useState(null);
    const [saveFilteredCountries, setSaveFilteredCountries] = useState(null);
    const [noCountry, setNoCountry] = useState(false);

    //fetch data
    useEffect(() => {
        axios
            .get('https://restcountries.com/v2/all')
            .then((data) => {
                setData(data.data);
                setFilteredCountriesByRegion(data.data);
                setSaveFilteredCountries(data.data);
                setLoading(false);
            })
            .catch((_) => {
                setLoading(false);
                setErr('something went wrong !');
            });
    }, []);

    //theme
    const handleDarkMode = () => {
        setDarkMode((darkMode) => !darkMode);
    };

    //save theme in localStorage
    useEffect(() => {
        localStorage.setItem('theme', darkMode);
    }, [darkMode]);

    const getLanguage = (data) => {
        return data.languages.map((language) => language.name);
    };

    // user search
    useEffect(() => {
        const filteredCountry =
            saveFilteredCountries &&
            saveFilteredCountries.filter((dataObj) =>
                dataObj.name
                    .toLowerCase()
                    .includes(userSearchWord.toLowerCase())
            );

        if (filteredCountry !== null && filteredCountry.length === 0) {
            setNoCountry(true);
        } else {
            setNoCountry(false);
        }

        setFilteredCountriesByRegion(filteredCountry);
    }, [userSearchWord, saveFilteredCountries]);

    // filter
    const filterByRegion = (region) => {
        setUserSearchWord('');
        if (region === 'All') {
            setFilteredCountriesByRegion(data);
            setSaveFilteredCountries(data);
            return;
        }
        const filteredCountryByRegion = data.filter(
            (data) => data.region === region
        );
        setFilteredCountriesByRegion(filteredCountryByRegion);
        setSaveFilteredCountries(filteredCountryByRegion);
    };

    return (
        <div
            className={`app main-container ${
                darkMode ? 'dark-mode' : 'light-mode'
            }`}
        >
            <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <filterCountryContext.Provider
                                    value={{
                                        userSearchWord,
                                        setUserSearchWord,
                                    }}
                                >
                                    <filterCountryByRegionContext.Provider
                                        value={filterByRegion}
                                    >
                                        <Header />
                                    </filterCountryByRegionContext.Provider>
                                </filterCountryContext.Provider>
                                <CountryCardContainer
                                    darkMode={darkMode}
                                    data={data && filteredCountriesByRegion}
                                    loading={loading}
                                    err={err}
                                    noCountry={noCountry}
                                />
                            </>
                        }
                    />

                    {data &&
                        data.map((dataObj) => (
                            <Route
                                path={dataObj.alpha3Code}
                                key={dataObj.alpha3Code}
                                element={
                                    <CountryCardDetails
                                        key={dataObj.alpha3Code}
                                        data={data}
                                        flag={dataObj.flags.png}
                                        country={dataObj.name}
                                        nativeName={dataObj.nativeName}
                                        population={dataObj.population}
                                        region={dataObj.region}
                                        subRegion={dataObj.subRegion}
                                        capital={dataObj.capital}
                                        domain={dataObj.topLevelDomain}
                                        currency={dataObj.currencies}
                                        language={getLanguage(dataObj)}
                                        borders={dataObj.borders}
                                    />
                                }
                            />
                        ))}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
