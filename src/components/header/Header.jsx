import React from 'react';
import Input from '../input/Input';
import Dropdown from '../dropdown/Dropdown';
import './header.scss';

const Header = () => {
    return (
        <div className='header px-md-5 px-3'>
            <Input />
            <Dropdown />
        </div>
    );
};

export default Header;
