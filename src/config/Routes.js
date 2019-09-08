import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Feed from '../components/Feed/Feed';
import Videos from '../components/Videos/Videos';
import Profile from '../components/Profile/Profile';
import ProfileContainer from '../containers/ProfileContainer';



// export default (
//     <Switch>
//         <Route exact path="/" component={ Home }/>
//         <Route path="/login" component={ Login }/>
//         <Route path="/register" component={ Register }/>
//         <Route path="/feed" component={ Feed }/>
//         <Route path="/videos" component={ Videos }/>
//         <Route path="/profile" component={ Profile }/>
//     </Switch>
// )


export default withRouter(({ setCurrentUser, currentUser, history }) => {
    const PrivateRoute = ({component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        currentUser
          ? <Component {...props} />
          : <Redirect to='/login' />
      )} />
    );
  
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' render={() => <Login history={history} setCurrentUser={setCurrentUser} />} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/feed' component={Feed} />
        <PrivateRoute path='/videos' component={Videos} />
        <PrivateRoute path='/profile' component={ProfileContainer} />
      </Switch>
    );
  });



