import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state:{
        profilePage:{
            posts:[{id:'1', message:'Hi', likesCounter:256},
                {id:'2', message:'How is your project going?', likesCounter:652}],
            newPostText: 'it-kamasutra'  
        },
        
        dialogsPage:{
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
            sidebar:{}
        }
},
    getState(){
        return this._state;
    },
    _callSubscriber (){
        console.log('a');
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._callSubscriber(this._state);
    },
}




export default store;
