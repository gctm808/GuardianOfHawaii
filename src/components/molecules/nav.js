/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/styles.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav id="nav" className="c-primary-nav">
            <NavLink exact to='/about'>About</NavLink>
            <NavLink exact to='/products'>Products</NavLink>
            <NavLink exact to='/contact'>Contact</NavLink>
            <NavLink exact to='/login'>Login</NavLink>
        </nav>
    );
};

export default Nav;