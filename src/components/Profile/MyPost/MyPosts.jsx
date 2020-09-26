import React from 'react';
import pi from "./MyPosts.module.css";  //pi-profile items
import Post from './Post/Post';

const MyPosts = () => {
  return (
  <div className={pi.profile_block}>
    <div >
      New post
    </div>
    <div>
      <textarea></textarea>
    </div>
    <div>
      <button>Create Post</button>
      </div> 
    <div>
      <h3>My Posts</h3>
    </div>
    <div className={pi.profile_posts}>
        <Post message="My first post!" likesCounter="256" />
        <button>Delete Post</button>
        <Post message="Need to improve this." likesCounter="652" />
    </div>
  </div>)
}

export default MyPosts;