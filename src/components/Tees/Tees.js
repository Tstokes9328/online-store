import React, {Component} from 'react';
import axios from 'axios';

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
    }

    render(){

        let tees = this.state.tees.map((item, index) => {
            return (
                <div className="tees-item-container" key={index}>
                    <img src={item.image_link} />
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