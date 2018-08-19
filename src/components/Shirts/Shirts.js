import React, {Component} from 'react';
import axios from 'axios';

//Styles
import './Shirts.css';

class Shirts extends Component {
    constructor(){
        super()

        this.state = {
            shirts: []
        }
    }

    //Get all buttons and flannels from db
    componentDidMount(){
        axios.get('/shirts').then(response => {
            this.setState({
                shirts: response.data
            })
        })

        //component will render at the top of the window
        window.scrollTo(0,0,);
    };

    render(){
        console.log(this.state.shirts)
        
        //map through buttons and flannels
        let shirts = this.state.shirts.map((item, index) => {
            return (
                <div className="shirt-container" ley={index}>
                    <img src={item.image_link} />
                    <h1>{item.name}</h1>
                    <hr />
                    <h2>{item.price}</h2>
                </div>
            )
        })

        return (
            <div className="shirts-container">
                <div className="shirts-header">
                    {/* Background Image */}
                </div>

                <div className="shirts-catalague">
                    <div className="shirts-title">
                        <h1>Shirts</h1>
                    </div>
                    <div className="shirts-catalague-display">
                        {shirts}
                    </div>
                </div>
            </div>
        )
    }
}

export default Shirts;