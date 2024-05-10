import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
    const data = await fetch('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4')
    return data.json()
})


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        data: null,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(fetchTodo.rejected, (state, action) => {
            state.error = true;
        })
    }
})
export default todoSlice.reducer;