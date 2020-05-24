import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
  render() {
    return (
      <nav className="Menu">
        <ul>
          <li>Hi, {this.props.username}</li>
          <li>&hearts;</li>
          <li>&hearts;</li>
          <li>&hearts;</li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
