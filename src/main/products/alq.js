import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
 
class Alq extends Component {
 
    render() {
        return (<ScriptTag isHydrating={true} type="text/javascript" src="https://alq.ixn.tech/js/alq.widget.js" />);
    }
}

export default Alq