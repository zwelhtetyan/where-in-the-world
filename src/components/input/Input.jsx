import React from 'react';
import './input.scss';
import { BiSearch } from 'react-icons/bi';

const Input = () => {
    return (
        <div className='search_bar'>
            <div className='search_bar_icon'>
                <BiSearch size={20} />
            </div>
            <input type='search' placeholder='Search for a country' />
        </div>
    );
};

export default Input;
