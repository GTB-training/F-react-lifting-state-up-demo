import React, { Component } from 'react';
import './UserProfile.scss';
import UserInfo from './UserInfo/UserInfo';
import Posts from './Posts/Posts';
import TaggedPosts from './TaggedPosts/TaggedPosts';

class UserProfile extends Component {
  render() {
    return (
      <main className="UserProfile">
        <UserInfo />
        <div className="posts-navbar">
          <ul>
            <li>Posts</li>
            <li>Tagged</li>
          </ul>
        </div>
        <div className="posts-wrapper">
          <Posts />
          <TaggedPosts />
        </div>
      </main>
    );
  }
}

export default UserProfile;
