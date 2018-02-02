import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <div className="form-group col-md-4">
                    <input type="text" className="form-control" placeholder="Search" onChange={(e) => this.props.handleFilterTextChange(e.target.value)} />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" onChange={this.props.handleInStockChange} />
                    <label className="form-check-label">Only Products in stock</label>
                </div>
            </div>
        );
    }

}

export default SearchBar;
