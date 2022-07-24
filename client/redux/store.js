import {configureStore} from '@reduxjs/toolkit';
import todoListReducer from './actions';

export default configureStore({
    reducer: {
        todoList:  todoListReducer,
    },
});