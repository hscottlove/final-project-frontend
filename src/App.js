import React, { Component } from 'react';
import MyRoutes from './config/Routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
  return (
  <>
   <Navbar />
   { MyRoutes }
   <Footer />
  </>
  );
  }
}

export default App;
