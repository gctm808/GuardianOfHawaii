import React, {Fragment} from 'react';
import '../../css/styles.css';

const FormField = (props) => {
    return (
        <Fragment className="c-field">
            <label for="field-id" className="c-field__label">{props.label}</label>
            <input id="field-id" type="text" placeholder={props.placeholder} value="" />
        </Fragment>
    );
};

export default FormField;