import React, { Component } from 'react';
import './UserProfile.scss';
import UserInfo from './UserInfo/UserInfo';
import Posts from './Posts/Posts';
import postsData from '../data/posts.json';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTagged: false,
      posts: [],
      taggedPosts: [],
    };
  }

  componentDidMount() {
    const taggedPosts = postsData.filter((post) => !post.isTagged);
    setTimeout(() => {
      this.setState({
        posts: postsData,
        taggedPosts,
      });
    }, 1000);
  }

  toggleShowTagged = (isTagged) => {
    this.setState({
      showTagged: isTagged,
    });
  };

  render() {
    const { showTagged, posts, taggedPosts } = this.state;
    const { user } = this.props;
    return (
      <main className="UserProfile">
        <UserInfo user={user} />
        <div className="posts-navbar">
          <ul>
            <li onClick={() => this.toggleShowTagged(false)}>Posts</li>
            <li onClick={() => this.toggleShowTagged(true)}>Tagged</li>
          </ul>
        </div>
        <div className="posts-wrapper">
          {showTagged ? <Posts posts={taggedPosts} /> : <Posts posts={posts} />}
        </div>
      </main>
    );
  }
}

export default UserProfile;
