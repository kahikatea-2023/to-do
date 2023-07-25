import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTodos } from '../apis/todo'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  return await getTodos()
})

const slice = createSlice({
  name: 'todos',
  initialState: [] as string[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (_, action) => {
      return action.payload
    })
  },
})

export default slice.reducer
