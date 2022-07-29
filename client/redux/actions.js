import {createSlice} from '@reduxjs/toolkit';

export const TodoListActions = createSlice({
    name: "todoList",
    initialState: {
        items: [], 
        server: "http://localhost:5000"
    },

    reducers: {

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

export const {handleSubmit, handleDelete, editData} = TodoListActions.actions;

export default TodoListActions.reducer;