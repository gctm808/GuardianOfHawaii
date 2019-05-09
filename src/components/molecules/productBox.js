import React from 'react';
import '../../css/styles.css';
import Button from './button';

const ProductBox = (props) => {
    return (
        <div className='productBox'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <Button name='LEARN MORE' />
        </div>
    );
};

export default ProductBox;