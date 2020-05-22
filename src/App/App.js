import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import UserProfile from '../UserProfile/UserProfile';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Header />
        <UserProfile />
      </div>
    );
  }
}

export default App;
