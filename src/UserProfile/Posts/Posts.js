import React, { Component } from 'react';
import './Posts.scss';

class Posts extends Component {
  render() {
    return (
      <section className="Posts">
        <ul>
          {this.props.posts.map((post) => (
            <li key={post.id}>
              <div className="post-image">{post.name}</div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Posts;
