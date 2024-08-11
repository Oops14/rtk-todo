import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'Reminders',
    initialState: [],
    reducers: {},
    extraReducers: () => {},
})

export const reminderReducer = slice.reducer
