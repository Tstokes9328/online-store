import React, {Component} from 'react';
import axios from 'axios';

//Styling
import './Home.css';

//Components
import BannerOne from './Banners/Banner1';

class Home extends Component {
    constructor(){
        super()

        this.state = {
            featuredItems: []
        }
    }

    //fills featuredItems array with featured items
    componentDidMount(){
        axios.get('/featured').then(response => {
            this.setState({
                featuredItems: response.data
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

            </div>
        )
    }
}

export default Home;