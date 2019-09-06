import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Routes from './config/Routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { API_URL } from './constants';
import './App.css';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
  };

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  logout = () => {
    localStorage.removeItem('uid');
    axios.post(`${API_URL}/auth/logout`, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.setState({ currentUser: null });
        this.props.history.push('/login');
      })
      .catch(err => console.log(err));
  };

  render() {
  return (
  <>
   <Navbar />
   
   <Footer />
  </>
  );
  }
}

export default withRouter(App);
