import React, { Component } from 'react';
import './UserInfo.scss';

class UserInfo extends Component {
  render() {
    const { name, statistics } = this.props.user;
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
