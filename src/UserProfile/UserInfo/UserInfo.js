import React, { Component } from 'react';
import './UserInfo.scss';
import userData from '../../data/user.json';

class UserInfo extends Component {
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
    const { name, statistics } = this.state.user;
    return (
      <section className="UserInfo">
        <div className="avatar">
          <div className="fake-image" />
        </div>

        <section className="user">
          <h2>{name}</h2>
          <ul>
            <li>{statistics ? statistics.posts : null} posts</li>
            <li>{statistics ? statistics.followers : null} followers</li>
            <li>{statistics ? statistics.following : null} following</li>
          </ul>
        </section>
      </section>
    );
  }
}

export default UserInfo;
