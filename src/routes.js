import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components
import Home from './components/Home/Home';
import Tees from './components/Tees/Tees';
import Shirts from './components/Shirts/Shirts';

//Routing
export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/tees" component={Tees}/>
        <Route exact path="/shirts" component={Shirts}/>
    </Switch>
)