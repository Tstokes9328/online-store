import React, {Component} from 'react';

import {NavLink} from 'react-router-dom'; 

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

                {/* drop down menu || can only toggle in mobile display */}
                <div className={this.state.dropDownOpen ? "drop-down-true" : "drop-down-false"}>

                </div>

                <div className="desktop-nav">
                    <ul>
                        <li><NavLink 
                        exact to="/"
                        activeStyle={{
                            background: '#1a1a1a',
                            color: '#eee'
                            }}
                        >Home</NavLink></li>

                        <li><NavLink 
                        to="/t-shirts"
                        activeStyle={{
                            background: '#1a1a1a',
                            color: '#eee'
                            }}
                        >T-Shirts</NavLink></li>

                        <li><NavLink 
                        to="/shirts"
                        activeStyle={{
                            background: '#1a1a1a',
                            color: '#eee'
                            }}
                        >Shirts</NavLink></li>

                        <li><NavLink 
                        to="/jackets"
                        activeStyle={{
                            background: '#1a1a1a',
                            color: '#eee'
                            }}
                        >Jackets</NavLink></li>

                        <li><NavLink 
                        to="/pants"
                        activeStyle={{
                            background: '#1a1a1a',
                            color: '#eee'
                            }}
                        >Pants</NavLink></li>

                        <li><NavLink 
                        to="/skate"
                        activeStyle={{
                            background: '#1a1a1a',
                            color: '#eee'
                            }}
                        >Skate</NavLink></li>

                    </ul>
                    <div className="desktop-nav-cart">
                    <h1>Cart</h1>
                    <FontAwesomeIcon icon="shopping-cart" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;