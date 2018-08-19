import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//Styling
import './Tees.css';

class Tees extends Component {
    constructor(){
        super()

        this.state = {
            tees: []
        }
    }

    componentDidMount(){
        axios.get('/tees').then(response => {
            this.setState({
                tees: response.data
            })
        })

        //component will render at the top of the window
        window.scrollTo(0,0,);
    }

    render(){

        let tees = this.state.tees.map((item, index) => {
            console.log(item.id)
            return (
                <div className="tees-item-container" key={index}>
                    <Link to={`/products/${item.id}`}><img src={item.image_link} /></Link>
                    <h1>{item.name}</h1>
                    <hr />
                    <h2>{item.price}</h2>
                </div>
            )
        })

        return (
            <div className="tees-container">
                <div className="tees-header">
                    {/* Background Image */}
                </div>
                <div className="tees-products">
                    <div className="tees-title">
                        <h1>Tees</h1>
                    </div>
                    <div className="tees-product-inv">
                        {tees}
                    </div>
                </div>
            </div>
        )
    }
}

export default Tees;