import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
 
class Alq extends Component {
 
    render() {
        return (<ScriptTag isHydrating={true} type="text/javascript" src='./alq2.js' />);
    }
}

export default Alq