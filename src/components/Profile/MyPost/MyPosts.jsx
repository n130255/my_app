import React from 'react';
import pi from "./MyPosts.module.css";  //pi-profile items
import Post from './Post/Post';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/profile-reducer'

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCounter={p.likesCounter} />); //p-post

  let newPostElement = React.createRef();

  let onAddPost = () =>{
    props.addPost();
  } 

  let onPostChange = () =>{
    //props.updateNewPostText(text);
    //let action = {type:'UPDATE-NEW-POST-TEXT', newText: text};
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
  <div className={pi.profile_block}>
    <div >
      New post
    </div>
    <div>
      <textarea onChange={onPostChange} 
                ref={newPostElement}
                value={props.newPostText}/>
    </div>
    <div>
      <button onClick={onAddPost}>Create Post</button>
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