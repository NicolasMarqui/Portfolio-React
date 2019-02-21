import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contato from './components/Contato';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <About />
        <Portfolio />
        <Contato />
      </div>
    );
  }
}

export default App;
