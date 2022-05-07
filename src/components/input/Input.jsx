import React, { useContext } from 'react';
import './input.scss';
import { BiSearch } from 'react-icons/bi';
import { filterCountryContext } from '../../App';

const Input = () => {
    const stateContext = useContext(filterCountryContext);

    return (
        <div className='search_bar'>
            <div className='search_bar_icon'>
                <BiSearch size={20} />
            </div>
            <input
                type='search'
                placeholder='Search for a country'
                value={stateContext.userSearchWord}
                onChange={(e) => stateContext.setUserSearchWord(e.target.value)}
            />
        </div>
    );
};

export default Input;
