import { combineReducers } from 'redux';
import todo from './reducers/todo';
import user from './reducers/user';

export default combineReducers({
    todo,
    user
});