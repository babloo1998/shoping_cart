import React, { Component } from 'react'; 
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <Home />
          <Cart />
      </div>
    );
  }
}

export default App;