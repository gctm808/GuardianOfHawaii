import React, {Fragment} from 'react';
import '../../css/styles.css';

const TextArea = (props) => {
    return(
        <Fragment className="c-textarea">
            <label for="" className="c-textarea__label">{props.label}</label>
	        <textarea id="" rows="10" className="c-textarea__text" placeholder='Text Area'></textarea>
        </Fragment>
    )
}

export default TextArea