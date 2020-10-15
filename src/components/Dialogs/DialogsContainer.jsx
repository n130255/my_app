import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../store-context';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import ds from "./Dialogs.module.css"; //ds-dialogs style
import Message from './Message/Message';

const DialogsContainer = () =>{
    
    return <StoreContext.Consumer> 
        { (store) => {
            let state = store.getState().dialogsPage;
    
            let onSendMessageClick = () =>{
                store.dispatch(sendMessageCreator());
            } 

            let onNewMessageChange = (body) =>{
                store.dispatch(updateNewMessageBodyCreator(body));
            } 

            return<Dialogs updateNewMessageBody={onNewMessageChange} 
                           sendMessage={onSendMessageClick}
                           dialogsPage={state} />
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;