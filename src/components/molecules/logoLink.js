/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/styles.css';
import {NavLink} from 'react-router-dom';

const logoLink = (props) => {
    const logo = {
        img: props.img,
        link: props.link
    }

    return (
        <NavLink exact to='/' className="c-logo-link">
            <img src={require(`../../images/${logo.img}`).default} className="c-logo c-logo-link__img" alt="homelink" />
        </NavLink>
    );
};

export default logoLink;