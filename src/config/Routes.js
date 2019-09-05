import React from 'react';
import  { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Feed from '../pages/Feed/Feed';
import Videos from '../pages/Videos/Videos';
import Profile from '../pages/Profile/Profile';



export default (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/feed" component={ Feed }/>
        <Route path="/videos" component={ Videos }/>
        <Route path="/profile" component={ Profile }/>
    </Switch>
)
