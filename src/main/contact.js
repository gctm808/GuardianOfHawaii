import React, {Fragment} from 'react';
import '../css/styles.css';
import Form from '../components/organisms/form';

const Contact = () => {
    return (
        <Fragment className='l extraPadding'>
            <h2>GET IN TOUCH</h2>
            <h4>Please fill out the form below and we will in touch as soon as possible. If this is an urgent matter, please call or email us directly.</h4><br />
            <div className='l--two-col'>
                <div className='l-main border-right'>
                    <Form field1='Name' field2='Email' field3='Message' button='SUBMIT' />
                </div>
                <div className='l-sidebar'>
                    <p>Hours:</p>
                    <p>9am - 4pm HST</p>
                    <p>Phone Number</p>
                    <p>(808) 531-9911</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Contact;