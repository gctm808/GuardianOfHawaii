import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
 
class FormEngine3 extends Component {
 
    render() {
        return (<ScriptTag isHydrating={true} type="text/javascript" src='https://cdn.jsdelivr.net/gh/gctm808/GuardianOfHawaii/src/main/products/formEngine2.js' />);
    }
}

export default FormEngine3