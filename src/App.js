import React, { Component } from 'react';

//Styling
import './App.css';

//Routing
import Routes from './routes';

//Components
import Navbar from './components/Navbar/Navbar';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  render() {

    //adds font awesome icons into a library to use
    library.add(faShoppingCart)

    return (
      <div className="app-container">
        <Navbar />
        {Routes}
      </div>
    );
  }
}

export default App;
