import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export type Notes = {
    id: string
    img?: string
    title: string
    isReminder: boolean
    isTask: boolean
    // tasks: any
}

const initialState: Notes[] = [
    {
        id: uuidv4(),
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        isReminder: false,
        isTask: true,
        // tasks: [],
    },
    {
        id: uuidv4(),
        img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
        title: 'Snacks',
        isReminder: false,
        isTask: true,
        // tasks: [],
    },
    {
        id: uuidv4(),
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        isReminder: false,
        isTask: true,
        // tasks: [],
    },
    {
        id: uuidv4(),
        img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
        title: 'Tower',
        isReminder: false,
        isTask: true,
        // tasks: [],
    },
    {
        id: uuidv4(),
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        isReminder: false,
        isTask: true,
        // tasks: [],
    },
    {
        id: uuidv4(),
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        isReminder: false,
        isTask: true,
        // tasks: [],
    },
    {
        id: uuidv4(),
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        isReminder: false,
        isTask: true,
        // tasks: [],
    },
]

const slice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<Notes>) => {
            state.push(action.payload)
        },
    },
    extraReducers: () => {},
})

export const { addNote } = slice.actions
export const noteSlice = slice.reducer
