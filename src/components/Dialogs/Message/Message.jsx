import React from 'react';
import ds from "./../Dialogs.module.css"; //ds-dialogs style



const Message = (props) =>{
    
    let newMessageElement = React.createRef();

let sendMessage = () =>{
    let textMessage = newMessageElement.current.value;
    alert(textMessage);
}
    
    return(<div>
                <div>
                    <div className={ds.message}>{props.message}</div>
                </div>
                <div>
                <textarea ref={newMessageElement}></textarea>
                </div>
                <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default Message;