import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

const testReducer = createSlice({
  name: 'test',
  initialState,
  reducers: {}
})

export default testReducer.reducer
