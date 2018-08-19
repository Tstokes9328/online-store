import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//Styling
import './Jackets.css';

class Jackets extends Component {
    constructor(){
        super()

        this.state = {
            jackets: []
        }
    }

    //Get all buttons and flannels from db
    componentDidMount(){
        axios.get('/jackets').then(response => {
            this.setState({
                jackets: response.data
            })
        })

        //component will render at the top of the window
        window.scrollTo(0,0,);
    };

    render(){
        //map through jackets
        let jackets = this.state.jackets.map((item, index) => {
            return (
                <div className="jacket-container" ley={index}>
                    <Link to={`/products/${item.id}`}><img src={item.image_link} /></Link>
                    <h1>{item.name}</h1>
                    <hr />
                    <h2>{item.price}</h2>
                </div>
            )
        })

        return (
            <div className="jackets-container">
                <div className="jackets-header-image">
                {/* HEADER IMAGE */}
                </div>

                <div className="jackets-catalague">
                    <div className="jackets-title">
                        <h1>Jackets</h1>
                    </div>
                    <div className="jackets-catalague-display">
                        {jackets}
                    </div>
                </div>
            </div>
        )
    }
}

export default Jackets;