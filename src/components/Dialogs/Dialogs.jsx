import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import ds from "./Dialogs.module.css"; //ds-dialogs style
import Message from './Message/Message';

const Dialogs = (props) =>{

    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);  //d-dialog
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message} /> ); //m-message
   
    return (
        <div className={ds.dialogs}>
            <div className={ds.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={ds.messages}>
                {messagesElements}
            </div>
        </div>)
}

export default Dialogs;