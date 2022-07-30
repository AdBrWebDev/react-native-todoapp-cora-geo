import {createSlice} from '@reduxjs/toolkit';

export const TodoListActions = createSlice({
    name: "todoList",
    initialState: {
        items: [], 
        loading: false,
        modal: false,
        darkMode: false,
    },

    reducers: {
        openModal: (state, action) => {
            state.modal = !state.modal;
        },

        setDarkMode: (state, action) => {
            state.darkMode = !state.darkMode;
        },

        saveSettings: (state, action) => {
            return;
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

        editItem: (state, action) => {
            const editItem = {
                text: action.payload.text,
                status: action.payload.status,
                id: action.payload.id,
                created: action.payload.created,
                updated: new Date().getDate() + "."+ new Date().getMonth() + "." + new Date().getFullYear(),
            }
            console.log(editItem)
        },

        handleDelete: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },

        filterItems: (state, action) => {
            return;
        }
    }}
);

export const {handleSubmit, handleDelete, editItem, filterItems, openModal, setDarkMode, saveSettings} = TodoListActions.actions;

export default TodoListActions.reducer;