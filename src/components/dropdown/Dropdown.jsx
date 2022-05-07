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
                    <li>
                        <a className='dropdown-item' href='#'>
                            Africa
                        </a>
                    </li>
                    <li>
                        <a className='dropdown-item' href='#'>
                            America
                        </a>
                    </li>
                    <li>
                        <a className='dropdown-item' href='#'>
                            Asia
                        </a>
                    </li>
                    <li>
                        <a className='dropdown-item' href='#'>
                            Europe
                        </a>
                    </li>
                    <li>
                        <a className='dropdown-item' href='#'>
                            Oceania
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
