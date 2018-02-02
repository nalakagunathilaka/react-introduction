import React from 'react';
import ProductRow from './ProductRow.jsx';
import SearchBar from './SearchBar.jsx';
import data from './data.js';

export default class ProductTable extends React.Component {
    constructor() {
        super();
        this.state = {
            filterText: '',
            inStockOnly: false,
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }
    handleInStockChange() {
        this.setState({
            inStockOnly: !this.state.inStockOnly
        });
    }
    render() {
        return (
            <React.Fragment>
                <SearchBar
                    inStockOnly={this.state.inStockOnly}
                    filterText={this.state.filterText}
                    handleFilterTextChange={this.handleFilterTextChange}
                    handleInStockChange={this.handleInStockChange}
                />
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                        {
                            data.map((product)=>{
                                if (product.name.indexOf(this.state.filterText) === -1) {
                                    return;
                                }
                                if (this.state.inStockOnly && !product.stocked) {
                                    return;
                                }
                                return (<ProductRow
                                    product={product}
                                    key={product.name}
                                />)
                            })
                        }
                    </tbody>

                </table>
            </React.Fragment>
        );
    }
}