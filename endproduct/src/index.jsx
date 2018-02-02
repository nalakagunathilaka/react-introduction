import React from 'react';
import {render} from 'react-dom';
import ProductTable from './ProductTable.jsx';

class App extends React.Component{
    render(){
        return (<div style={{padding: 10}}>
            <h1>Product Data Table</h1>
            <ProductTable />
        </div>);
    }
}

render(<App />, document.getElementById('app'));