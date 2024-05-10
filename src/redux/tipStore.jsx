import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "./tipTodoSlicer"

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})