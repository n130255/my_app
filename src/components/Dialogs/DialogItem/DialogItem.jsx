import React from 'react';
import { NavLink } from 'react-router-dom';
import ds from "./../Dialogs.module.css"; //ds-dialogs style

const DialogItem = (props) =>{
    return(
        <div className={ds.dialog_item + ' ' + ds.active }>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink> 
        </div>
    )
}

export default DialogItem;