import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type NoteTasks = {
    [key: string]: Task[]
}

export type Task = {
    id: string
    title: string
    isDone: boolean
}

const initialState: NoteTasks = {}

const slice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ noteId: string; task: Task }>) => {
            let note = state[action.payload.noteId]

            if (!note) {
                note = []
                state[action.payload.noteId] = note
            }

            note.push(action.payload.task)
        },
    },
    extraReducers: () => {},
})

export const tasksSlice = slice.reducer
export const { addTask } = slice.actions
