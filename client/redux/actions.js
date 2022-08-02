import {createSlice} from '@reduxjs/toolkit';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import {newItem, updateItem, deleteItem, getAllItems} from '../database/db';


export const TodoListActions = createSlice({
    name: "todoList",
    initialState: {
        items: [], 
        modal: false,
        darkMode: false,
        colorMode: "light"
    },

    reducers: {
        openModal: (state, action) => {
            state.modal = !state.modal;
        },

        setDarkMode: (state, action) => {
            state.darkMode = !state.darkMode;
            if(colorMode === "light"){
                state.colorMode = "dark";
            }else{
                state.colorMode = "light";
            }
        },

        saveSettings: (state, action) => {
            AsyncStorage.setItem("darkMode", state.darkMode)
        },

        handleSubmit: (state,action) => {
            const item = {
                text: action.payload,
                id: Date.now(),
                created: new Date().getDate() + "."+ new Date().getMonth() + "." + new Date().getFullYear(),
                status: 0,
            }
            state.items.push(item)
            newItem(item)
            getAllItems()
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
            updateItem(editItem)
        },

        handleDelete: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
            deleteItem(action.payload)
        },

        filterItems: (state, action) => {
            return;
        }
    }}
);

export const {handleSubmit, handleDelete, editItem, filterItems, openModal, setDarkMode, saveSettings} = TodoListActions.actions;

export default TodoListActions.reducer;