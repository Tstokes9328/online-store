import React, {Component} from 'react';

//Styles
import './Footer.css';

//Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
    render(){
        return (
            <div className="footer-container">
                <div className="links-container">
                    <ul>
                        <li>Customer Service</li>
                        <li>FAQ</li>
                        <li>Sizing</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="subscription-container">
                    <h1>Keep up with us!</h1>
                    <p>Be the first to know about new products and happenings!</p>
                    <div className="input-container">
                        <input type="text" placeholder="Please enter you email"/>
                        <button>sign up</button>
                    </div>
                    <div className="icons-container">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                        <FontAwesomeIcon icon={['fab', 'tumblr']} />
                    </div>
                </div>
                <div className="footer">
                    <h1>OneStop 2018</h1>
                </div>
            </div>
        )
    }
}

export default Footer;