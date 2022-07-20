import {configureStore} from '@reduxjs/toolkit';
import todoListReducer from './redux/todoListReducer';

export default configureStore({
    reducer: {
        todoList:  todoListReducer,
    },
});