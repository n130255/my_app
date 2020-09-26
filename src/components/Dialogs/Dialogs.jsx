import React from 'react';
import { NavLink } from 'react-router-dom';
import ds from "./Dialogs.module.css"; //ds-dialogs style

const DialogItem = (props) =>{
    return(
        <div className={ds.dialog_item + ' ' + ds.active }>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink> 
        </div>
    )
}

const Message = (props) =>{
    return(
        <div className={ds.message}>{props.message}</div>
    )
}

const Dialogs = (props) =>{
    return (
        <div className={ds.dialogs}>
            <div className={ds.dialogs_items}>
                <DialogItem name="Nikita" id="1" />
                <DialogItem name="Ildar" id="2" />
                <DialogItem name="Ravshan" id="3" />
                <DialogItem name="Kirill" id="4" />
                <DialogItem name="Pashtet" id="5" />
            </div>
            <div className={ds.messages}>
                <Message message="Hi" />
                <Message message="How is your project going?" />
                <Message message="GL" />
            </div>
        </div>)
}

export default Dialogs;