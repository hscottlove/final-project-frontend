import React from 'react';
import  { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Feed from '../components/Feed/Feed';
import Videos from '../components/Videos/Videos';
import Profile from '../components/Profile/Profile';



export default (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/login" component={ Login }/>
        <Route path="/register" component={ Register }/>
        <Route path="/feed" component={ Feed }/>
        <Route path="/videos" component={ Videos }/>
        <Route path="/profile" component={ Profile }/>
    </Switch>
)
