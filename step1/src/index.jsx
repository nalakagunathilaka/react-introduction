import React from 'react';
import {render} from 'react-dom';

class App extends React.Component{
    render(){
        return (<div style={{padding: 10}}>
            <h1>Product Data Table</h1>
        </div>);
    }
}

render(<App />, document.getElementById('app'));