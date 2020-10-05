const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            ]
        }
},
    getState(){
        return this._state;
    },
    callSubscriber (){
        console.log('a');
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost={
                id:'5',
                message:this._state.profilePage.newPostText,
                likesCounter: 1
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}
export const addPostActionCreator = () =>({type:'ADD-POST'})

export const  updateNewPostTextActionCreator = (text) =>
      ({type:{type:'UPDATE-NEW-POST-TEXT', newText:text}})
export default store;
