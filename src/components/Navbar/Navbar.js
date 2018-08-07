import React, {Component} from 'react';

//Styling
import './Navbar.css';

//Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navbar extends Component {
    constructor(){
        super()

        this.state = {
            dropDownOpen: false
        }

        //binding methods
        this.toggleDropDown = this.toggleDropDown.bind(this);
    }

    //methods
        //switch for down menu on mobile
        toggleDropDown(){
            this.setState({dropDownOpen: !this.state.dropDownOpen})
        }

    render(){
        return(
            <div className="navbar-container">
                <div className="free-shipping-banner">
                    <h1>free shipping on all orders</h1>
                </div>
                <div className="mobile-nav">
                    <div className="drop-down" onClick={this.toggleDropDown}>
                        <span className="drop-down1"/>
                        <span className="drop-down2"/>
                        <span className="drop-down3"/>
                    </div>
                    <h1>OneStop</h1>
                    <FontAwesomeIcon icon="shopping-cart" />
                </div>

                <div className={this.state.dropDownOpen ? "drop-down-true" : "drop-down-false"}>

                </div>
            </div>
        )
    }
}

export default Navbar;