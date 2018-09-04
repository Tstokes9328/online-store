import React, { Component } from 'react';
import {connect} from 'react-redux';

//Styling
import './App.css';

//Routing
import Routes from './routes';

//Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

//Redux Method
import {getUser} from './redux/users';

class App extends Component {

  componentDidMount(){
    this.props.getUser();
  }
  
  render() {
    //adds font awesome icons into a library to use
    library.add(faShoppingCart, fab)

    console.log(this.props)

    return (
      <div className="app-container">
        <Navbar />
        {Routes}
        <a href={process.env.REACT_APP_LOGIN}>
        <button>Click</button>
        </a>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {getUser})(App);
