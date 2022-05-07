import React from 'react';
import './dropdown.scss';

const Dropdown = () => {
    return (
        <div className='dropdown_container'>
            <div className='dropdown'>
                <button
                    className='btn dropdown-toggle'
                    type='button'
                    id='filter-country'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                >
                    Filter by Region
                </button>

                <ul className='dropdown-menu' aria-labelledby='filter-country'>
                    <li className='dropdown-item'>Africa</li>
                    <li className='dropdown-item'>America</li>
                    <li className='dropdown-item'>Asia</li>
                    <li className='dropdown-item'>Europe</li>
                    <li className='dropdown-item'>Oceania</li>
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
