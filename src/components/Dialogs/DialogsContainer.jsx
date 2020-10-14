import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import ds from "./Dialogs.module.css"; //ds-dialogs style
import Message from './Message/Message';

const DialogsContainer = (props) =>{
    let state = props.store.getState().dialogsPage;
    
    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator());
    } 

    let onNewMessageChange = (body) =>{
        props.store.dispatch(updateNewMessageBodyCreator(body));
    } 

    return (<Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                     dialogsPage={state}  />)
}

export default DialogsContainer;