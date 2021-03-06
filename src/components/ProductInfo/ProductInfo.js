import React, { Component } from 'react';
import axios from 'axios';

//Styling
import './ProductInfo.css';

class ProductInfo extends Component {
    constructor() {
        super()

        this.state = {
            productInfo: [],
            quantity: 1,
            modal: false
        }

        //Binding methods
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        //destructure product id from params
        let id = this.props.match.params.id;

        //get product info based off id
        axios.get(`/product/${id}`).then(response => {
            this.setState({
                productInfo: response.data
            })
        });

        //loads at top of the window
        window.scrollTo(0, 0);
    };

    //Methods
    //increase quantity
    increaseCount() {
        if (this.state.quantity < 10) {
            this.setState({
                quantity: this.state.quantity + 1
            })
        }
    };

    //decrease quantity
    decreaseCount() {
        if (this.state.quantity > 1) {
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
    }

    //open modal
    openModal() {
        this.setState({
            modal: true
        })
    };

    //close modal
    closeModal() {
        this.setState({
            modal: false
        })
    };

    render() {

        //map through the productInfo in state to display product name & style
        let productTitle = this.state.productInfo.map((item, index) => {
            return (
                <div className="product-info-title">
                    <h1>{item.name}</h1>
                    <hr />
                    <h2>{item.style}</h2>
                </div>
            )
        });

        //map through the profuctInfo in state to display the product image
        let productImage = this.state.productInfo.map((item, index) => {
            return (
                <div className="product-image-container">
                    <img src={item.image_link} alt="product display" onClick={this.openModal} />
                </div>
            )
        })

        //map through productInfo to display the product image in a modal
        let modal = this.state.productInfo.map((item, index) => {
            return (
                <div className={this.state.modal ? "product-modal-container" : "modal-false"}>
                    <div className="product-modal">
                        <img src={item.image_link} alt="product modal" />
                        <div className="modal-exit" onClick={this.closeModal}>&times;</div>
                    </div>
                </div>
            )
        })

        //map through the productInfo in state to display product details
        let productDetails = this.state.productInfo.map((item, index) => {
            return (
                <div className="product-info-details">
                    <div className="product-details-container">
                        <div className="product-details-price">
                            <h1>${item.price}</h1>
                        </div>
                        <div className="product-details">
                            <h2>{item.name}</h2>
                            <h3>Style: {item.style}</h3>
                            <h4>Color: {item.color}</h4>
                        </div>
                        <div className="product-options">
                            <div className="product-quant">
                                <h1>Quantity:</h1>
                                <div className="minus" onClick={this.decreaseCount}>&minus;</div>
                                <input type="number" value={this.state.quantity} />
                                <div className="add" onClick={this.increaseCount}>&#43;</div>
                            </div>
                            <button>add to cart</button>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div className="product-info-container">
                {productTitle}
                <div className="product-overview-container">
                    {productImage}
                    {productDetails}
                </div>

                {/* Modal */}
                {modal}
            </div>
        )
    }
}

export default ProductInfo;