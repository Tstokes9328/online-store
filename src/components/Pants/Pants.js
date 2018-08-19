import React, {Component} from 'react';
import axios from 'axios';

//Styling
import './Pants.css';

class Pants extends Component {
    constructor(){
        super()

        this.state = {
            pants: []
        }
    }

    //Get all buttons and flannels from db
    componentDidMount(){
        axios.get('/pants').then(response => {
            this.setState({
                pants: response.data
            })
        })

        //component will render at the top of the window
        window.scrollTo(0,0,);
    };

    render(){
        //map through jackets
        let pants = this.state.pants.map((item, index) => {
            return (
                <div className="pant-container" ley={index}>
                    <img src={item.image_link} />
                    <h1>{item.name}</h1>
                    <hr />
                    <h2>{item.price}</h2>
                </div>
            )
        })

        return (
            <div className="pants-container">
                <div className="pants-header-image">
                {/* HEADER IMAGE */}
                </div>

                <div className="pants-catalague">
                    <div className="pants-title">
                        <h1>Pants</h1>
                    </div>
                    <div className="pants-catalague-display">
                        {pants}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pants;