import React from 'react';
import FormField from '../molecules/formField';
import TextArea from '../molecules/textarea';
import Button from '../molecules/button';
import PageTitle from '../organisms/pageTitle';


const Form = () => {
    return (
        <div>
            <PageTitle title='Contact Us' />
            <form class="c-form c-form--stacked" method="post" action="#">
                <FormField label='name' placeholder='Enter Name' />
                <FormField label='email' placeholder='Enter Email' />
                <TextArea label='message' placeholder='Enter Message' />
                <Button name='Submit' />
            </form>
        </div>
    );
};

export default Form;