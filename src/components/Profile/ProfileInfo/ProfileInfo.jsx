import React from 'react';
import pm from './ProfileInfo.module.css'; //pm-profile module

const ProfileInfo = (props) =>{
    return(
        <div>
            <div>
                <img src="https://www.privateclientwealthadvisors.com/wp-content/uploads/2017/09/bg-img-09.jpg" className= {pm.content_img} alt="" />
            </div>
            <div className={pm.description_block}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;