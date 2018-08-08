import React, {Component} from 'react';

//Styling
import './Home.css';

class Home extends Component {

    render(){
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
            </div>
        )
    }
}

export default Home;