import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
    const data = await fetch('https://655c83b925b76d9884fd6eb7.mockapi.io/api1/Api2')
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