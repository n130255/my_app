const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    messages:[{id:'1', message:'Hi'},
        {id:'2', message:'How is your project going?'},
        {id:'3', message:'GL'}
    ],

    dialogs:[{id:'1', name:'Nikita'},
        {id:'2', name:'Ildar'},
        {id:'3', name:'Ravshan'},
        {id:'4', name:'Kirill'},
        {id:'5', name:'Pashtet'}
    ],
    newMessageBody: '',
    }; 

const dialogsReducer = (state = initialState,action) =>{
    switch(action.type){
        case  SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id:'4', message:body});
            return state;
        
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        default:
            return state;
    }
}

export const sendMessageCreator = () =>({type:SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type:UPDATE_NEW_MESSAGE_BODY , body:body})
export default dialogsReducer;