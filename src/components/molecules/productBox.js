import React, {Fragment} from 'react';
import '../../css/styles.css';
import Button from './button';
import {NavLink} from 'react-router-dom'

const ProductBox = (props) => {
    return (
        <Fragment className='productBox'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <NavLink exact to={props.link}><Button name='LEARN MORE' /></NavLink>
        </Fragment>
    );
};

export default ProductBox;