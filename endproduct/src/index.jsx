import React from 'react';
import {render} from 'react-dom';
import ProductTable from './ProductTable.jsx';
import data from './data.js';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            products: [],
            isLoading: false,
        };
    }

    componentDidMount(){
        this.setState({
            isLoading: true
        });
        fetch('http://www.mocky.io/v2/5a75366d2d0000890bfe1178').then((response)=>{
            return response.json();
        }).then((products)=>{
            this.setState({
                products: products,
                isLoading: false,
            });
        });
    }

    render(){
        if(this.state.isLoading) {
            return (
                <div>Loading...</div>
            );
        }
        return (<div style={{padding: 10}}>
            <h1>Product Data Table</h1>
            <ProductTable products={this.state.products}/>
        </div>);
    }
}

render(<App />, document.getElementById('app'));