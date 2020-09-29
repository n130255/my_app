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

    let dialogs =[
        {id:'1', name:'Nikita'},
        {id:'2', name:'Ildar'},
        {id:'3', name:'Ravshan'},
        {id:'4', name:'Kirill'},
        {id:'5', name:'Pashtet'},
    ]

    let messagesData =[
        {id:'1', message:'Hi'},
        {id:'2', message:'How is your project going?'},
        {id:'3', message:'GL'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);  //d-dialog

    let messagesElements = messagesData.map(m => <Message id={m.id} message={m.message} /> ); //m-message
   
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