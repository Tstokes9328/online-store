import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components
import Home from './components/Home/Home';
import Tees from './components/Tees/Tees';
import Shirts from './components/Shirts/Shirts';
import Jackets from './components/Jackets/Jackets';

//Routing
export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/tees" component={Tees}/>
        <Route  path="/shirts" component={Shirts}/>
        <Route  path="/jackets" component={Jackets}/>
    </Switch>
)