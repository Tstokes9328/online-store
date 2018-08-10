import React, {Component} from 'react';
import axios from 'axios';

//Styling
import './Home.css';

//Components
import BannerOne from './Banners/Banner1';
import Footer from '../Footer/Footer';
import Motorcycle from './Motorcyle/Motorcycle';

class Home extends Component {
    constructor(){
        super()

        this.state = {
            featuredItems: [],
            bestSellers: []
        }
    }

    //fills featuredItems array with featured items
    componentDidMount(){
        //Gets featured images
        axios.get('/featured').then(response => {
            this.setState({
                featuredItems: response.data
            })
        });

        //Gets best sellers
        axios.get('/bestsellers').then(response => {
            this.setState({
                bestSellers: response.data
            })
        })
    }

    render(){

        //map through featured items
        const featured = this.state.featuredItems.map((item, index) => {
            return (
                <div key={index} className="product-container">
                    <img src={item.image_link} />
                    <h1>{item.name}</h1>
                    <hr />
                    <h2>${item.price}</h2>
                </div>
            )
        })

        //map through best seller items
        const bestSeller = this.state.bestSellers.map((item, index) => {
            return (
                <div key={index} className="best-seller-product">
                    <img src={item.image_link} />
                    <h1>{item.name}</h1>
                    <hr />
                    <h2>${item.price}</h2>
                </div>
            )
        })

        return (
            <div className="home-container">
                <div className="home-header">
                <div className="desktop-skate-sale">
                    <h1>New Boards Are Here</h1>
                    <p>Our brand new boards are back in stock! Get them while the gettin' is good before it's too late.</p>
                    <button>shop collection</button>
                </div>
                </div>
                <div className="mobile-skate-sale">
                    <h1>New Boards Are Here</h1>
                    <p>Our brand new boards are back in stock! Get them while the gettin' is good before it's too late.</p>
                    <button>shop collection</button>
                </div>
                <div className="featured-items-container">
                    <div className="featured-title">
                        <h1>Featured Products</h1>
                    </div>
                    <div className="featured-products">
                    {featured}
                    </div>
                </div>

                <BannerOne />

                <div className="best-sellers-container">
                    <div className="best-sellers-title">
                        <h1>Best Sellers</h1>
                    </div>

                    <div className="best-sellers-items">
                        {bestSeller}
                    </div>
                </div>

                <Motorcycle />
            </div>
        )
    }
}

export default Home;