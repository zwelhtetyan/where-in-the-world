import React from 'react';
import './navbar.scss';

const Navbar = ({ darkMode, handleDarkMode }) => {
    return (
        <div className='navbar py-3 px-md-5 px-3'>
            <h5 className='m-0'>Where in the world?</h5>
            <div className='day-night d-flex align-item-center'>
                <div className='mode' onClick={handleDarkMode}>
                    <span className='sun'>🌞</span>
                    <span className='moon'>🌜</span>
                    <span
                        className={`ball ${!darkMode && 'ball-right'}`}
                    ></span>
                </div>
                <p className='m-0 ms-2'>
                    {darkMode ? 'dark mode' : 'light mode'}
                </p>
            </div>
        </div>
    );
};

export default Navbar;

// 🌞🌜
