import {createSlice} from '@reduxjs/toolkit';

export const TodoListActions = createSlice({
    name: "todoList",
    initialState: {
        items: [], 
        loading: false,
        header: "Todo-app",
        modal: false,
    },

    reducers: {
        openModal: (state, action) => {
            state.modal = !state.modal;
        },

        handleSubmit: (state,action) => {
            const item = {
                text: action.payload,
                id: Date.now(),
                created: new Date().getDate() + "."+ new Date().getMonth() + "." + new Date().getFullYear(),
                status: 0,
            }
            state.items.push(item)
        },

        editData: (state, action) => {
            return;
        },

        handleDelete: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }}
);

export const {handleSubmit, handleDelete, editData, openModal} = TodoListActions.actions;

export default TodoListActions.reducer;