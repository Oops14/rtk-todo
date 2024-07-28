import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'notes',
    initialState: {},
    reducers: {},
    extraReducers: () => {},
})

export const noteSlice = slice.reducer
