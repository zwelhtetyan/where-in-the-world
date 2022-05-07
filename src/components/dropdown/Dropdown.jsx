import React, { useContext } from 'react';
import { filterCountryByRegionContext } from '../../App';
import './dropdown.scss';

const Dropdown = () => {
    const filterByRegionContext = useContext(filterCountryByRegionContext);

    const activeRegion = (e) => {
        const allRegions = document.querySelectorAll('.dropdown-menu li');
        const currentRegion = document.querySelector(
            `.${e.target.textContent}`
        );
        allRegions.forEach((region) =>
            region.classList.remove('active-region')
        );
        currentRegion.classList.add('active-region');
    };

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
                    <li
                        className='dropdown-item All'
                        onClick={(e) => {
                            filterByRegionContext(e.target.textContent);
                            activeRegion(e);
                        }}
                    >
                        All
                    </li>
                    <li
                        className='dropdown-item Africa'
                        onClick={(e) => {
                            filterByRegionContext(e.target.textContent);
                            activeRegion(e);
                        }}
                    >
                        Africa
                    </li>
                    <li
                        className='dropdown-item Americas'
                        onClick={(e) => {
                            filterByRegionContext(e.target.textContent);
                            activeRegion(e);
                        }}
                    >
                        Americas
                    </li>
                    <li
                        className='dropdown-item Asia'
                        onClick={(e) => {
                            filterByRegionContext(e.target.textContent);
                            activeRegion(e);
                        }}
                    >
                        Asia
                    </li>
                    <li
                        className='dropdown-item Europe'
                        onClick={(e) => {
                            filterByRegionContext(e.target.textContent);
                            activeRegion(e);
                        }}
                    >
                        Europe
                    </li>
                    <li
                        className='dropdown-item Oceania'
                        onClick={(e) => {
                            filterByRegionContext(e.target.textContent);
                            activeRegion(e);
                        }}
                    >
                        Oceania
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
