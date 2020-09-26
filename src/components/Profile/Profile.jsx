import React from 'react';
import MyPosts from './MyPost/MyPosts';
import pi from "./Profile.module.css";  //pi-profile items
import ps from "./MyPost/MyPosts.module.css";  //ps-post settings
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = () =>{
  return <div>
    <ProfileInfo />
    <MyPosts />
  </div>
}

export default Profile;