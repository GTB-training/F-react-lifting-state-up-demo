import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import UserProfile from '../UserProfile/UserProfile';
import userData from '../data/user.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        user: userData,
      });
    }, 1000);
  }

  render() {
    return (
      <div data-testid="app" className="App">
        <Header />
        <UserProfile user={this.state.user} />
      </div>
    );
  }
}

export default App;
