import {combineReducers} from 'redux';
import todos from './todos';
import filter from './filter';

//  这是一个combineReducer，包含了2个具体的reducer
const reducers = combineReducers({
    todos,
    filter,
});

export default reducers;