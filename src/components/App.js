import React, { Component } from 'react';
import '../css/App.css';
import Navigation from '../components/navigation.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
