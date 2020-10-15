import { createStore, combineReducers } from 'redux';
import sidebarReducer from './sidebar-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;