import React from 'react';
import '../css/styles.css';
import Form from '../components/organisms/form';

const Contact = () => {
    return (
        <div className='l extraPadding'>
            <h2>GET IN TOUCH</h2>
            <h4>Please fill out the form below and we will in touch as soon as possible.</h4><br />
            <div className='l--two-col'>
                <div className='l-main'>
                    <Form field1='Name' field2='Email' field3='Message' button='SUBMIT' />
                </div>
                <div className='l-sidebar'>
                    sidebar
                </div>
            </div>
        </div>
    );
};

export default Contact;