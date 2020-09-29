import React from 'react';
import pi from "./MyPosts.module.css";  //pi-profile items
import Post from './Post/Post';

const MyPosts = () => {
  let Posts =[
    {id:'1', message:'Hi', likesCounter:256},
    {id:'2', message:'How is your project going?', likesCounter:652},
]

  let postsElements = Posts.map(p => <Post id={p.id} message={p.message} likesCounter={p.likesCounter} />); //p-post

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
        {postsElements}
        <button>Delete Post</button>
    </div>
  </div>)
}

export default MyPosts;