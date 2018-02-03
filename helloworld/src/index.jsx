import React from 'react';
import {render} from 'react-dom';

class HelloWorld extends React.Component{
    render(){
    }
}

render(<HelloWorld text="Hello world"/>, document.getElementById('app'));