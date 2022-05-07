import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Navbar, Header } from './components';
import UseFetch from './hooks/UseFetch';
import CountryCardContainer from './containers/CountryCardContainer';
import CountryCardDetails from './components/countryCard/CountryCardDetails';

const App = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme')
            ? localStorage.getItem('theme') === 'true'
            : true
    );

    const handleDarkMode = () => {
        setDarkMode((darkMode) => !darkMode);
    };

    useEffect(() => {
        localStorage.setItem('theme', darkMode);
    }, [darkMode]);

    const [data, loading, err] = UseFetch('https://restcountries.com/v2/all');

    const getLanguage = (data) => {
        return data.languages.map((language) => language.name);
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
                                <Header />
                                <CountryCardContainer
                                    darkMode={darkMode}
                                    data={data}
                                    loading={loading}
                                    err={err}
                                />
                            </>
                        }
                    />
                    {data &&
                        data.data.map((dataObj) => (
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

// currency={data.currencies[0].name}
