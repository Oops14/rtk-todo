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
        removeTask: (state, action: PayloadAction<{ taskId: string; noteId: string }>) => {
            const note = state[action.payload.noteId]
            const indexOfTask = note.findIndex((t) => t.id === action.payload.taskId)
            if (indexOfTask !== -1) note.splice(indexOfTask, 1)
        },
        toggleTaskCompletion: (state, action: PayloadAction<{ taskId: string; noteId: string }>) => {
            const note = state[action.payload.noteId]
            const indexOfTask = note.findIndex((t) => t.id === action.payload.taskId)
            if (indexOfTask !== -1) note[indexOfTask].isDone = !note[indexOfTask].isDone
        },
        updateTask: (state, action: PayloadAction<{ taskId: string; noteId: string; newTitle: string }>) => {
            const note = state[action.payload.noteId]
            const indexOfTask = note.findIndex((t) => t.id === action.payload.taskId)
            if (indexOfTask !== -1) note[indexOfTask].title = action.payload.newTitle
        },
    },
    extraReducers: () => {},
})

export const tasksSlice = slice.reducer
export const { addTask, removeTask: deleteTask, toggleTaskCompletion, updateTask } = slice.actions
