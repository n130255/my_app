import React from 'react';
import ds from "./../Dialogs.module.css"; //ds-dialogs style

const Message = (props) =>{
    return(
        <div className={ds.message}>{props.message}</div>
    )
}

export default Message;