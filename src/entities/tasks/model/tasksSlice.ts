import { createSlice } from '@reduxjs/toolkit'
import { Notes } from '../../noteItem/model/noteSlice'

export type NoteTasks = {
    [key: string]: Notes[]
}

const initialState: NoteTasks = {}

const slice = createSlice({
    name: 'notes',
    initialState,
    reducers: {},
    extraReducers: () => {},
})

export const tasksSlice = slice.reducer
