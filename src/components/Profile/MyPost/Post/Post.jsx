import React from 'react';
import pi from "./Post.module.css";  //pi-profile items
import al from "./avatar.svg"; //al-avatar logo
import li from "./like.svg"; //li-like logo

const Post = (props) => {
  return <div>
    <div className={pi.profile_posts}>
      <div className={pi.profile_post}>
        <img className={pi.avatar_img} src={al} alt="" />
        <div className={pi.profile_message}>{props.message}</div>
      </div >
      <div>
    <span>
      <img className={pi.like_img} src={li} />{props.likesCounter}
    </span>
      </div>
    </div>
  </div>
}

export default Post;