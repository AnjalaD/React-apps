import { combineReducers } from 'redux';
import counterReducer from './counter';
import newTodoReducer from './newTodo';

const allReducers = combineReducers({
    counter: counterReducer,
    newTodo: newTodoReducer
});

export default allReducers;