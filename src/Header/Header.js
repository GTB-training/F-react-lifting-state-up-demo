import React, { Component } from 'react';
import './Header.scss';
import Search from './Search/Search';
import Menu from './Menu/Menu';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="header-wrapper">
          <img
            alt="Instagram"
            src="//www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            height="30px"
          />
          <Search />
          <Menu />
        </div>
      </header>
    );
  }
}

export default Header;
