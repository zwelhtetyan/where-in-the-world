import React, { useEffect, useState } from 'react';
import './App.scss';
import { Navbar, Header } from './components';

import CountryCardContainer from './containers/CountryCardContainer';

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

    return (
        <div
            className={`app main-container ${
                darkMode ? 'dark-mode' : 'light-mode'
            }`}
        >
            <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />
            <Header />
            <CountryCardContainer darkMode={darkMode} />
        </div>
    );
};

export default App;
