import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import ds from "./Dialogs.module.css"; //ds-dialogs style
import Message from './Message/Message';

const Dialogs = (props) =>{
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);  //d-dialog
    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message} /> ); //m-message
    let newMessageBody = state.newMessageBody; 
    
    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator());
    } 

    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    } 

    return (
        <div className={ds.dialogs}>
            <div className={ds.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={ds.messages}>
                <div>{messagesElements}</div>
                <div><textarea value={newMessageBody}
                               placeholder='Write something'
                               onChange={onNewMessageChange}></textarea></div>
                <div><button onClick={onSendMessageClick}>Send message</button></div>
            </div>
        </div>)
}

export default Dialogs;