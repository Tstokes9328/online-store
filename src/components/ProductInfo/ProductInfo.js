import React, {Component} from 'react';

//Styling
import './ProductInfo.css';

class ProductInfo extends Component {
    render(){

        let id = this.props.match.params.id;

        return (
            <div className="product-info-container">
                <h1>Product info for {id}</h1>
            </div>
        )
    }
}

export default ProductInfo;