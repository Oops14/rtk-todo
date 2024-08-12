import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Reminder = {
    id: string;
    title: string;
    img: string;
    date: string;
}

const slice = createSlice({
    name: 'reminders',
    initialState: [] as Reminder[],
    reducers: {
        addReminder: (state, action: PayloadAction<Reminder>) => {
            state.unshift({
                id: action.payload.id,
                title: action.payload.title,
                img: action.payload.img,
                date: action.payload.date,
            })
        },
    },
    extraReducers: () => {
    },
})

export const reminderReducer = slice.reducer
export const { addReminder } = slice.actions