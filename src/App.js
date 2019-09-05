import React, { Component } from 'react';
import MyRoutes from './config/Routes';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
  return (
  <>
   <Navbar />
   { MyRoutes }
  </>
  );
  }
}

export default App;
