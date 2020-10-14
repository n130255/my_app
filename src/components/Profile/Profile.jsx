import React from 'react';
import MyPosts from './MyPost/MyPosts';
import pi from "./Profile.module.css";  //pi-profile items
import ps from "./MyPost/MyPosts.module.css";  //ps-post settings
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from './MyPost/MyPostsContainer';

const Profile = (props) =>{
  return <div>
    <ProfileInfo />   
    <MyPostsContainer store={props.store} />
  </div>
}

export default Profile;