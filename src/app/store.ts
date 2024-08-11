import { configureStore, UnknownAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { AnyAction, combineReducers } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { noteSlice } from '../entities/noteItem/model/noteSlice.ts'
import { reminderReducer } from '../entities/reminderItem/model/reminderSlice.ts'
import { tasksSlice } from '../entities/tasks/model/tasksSlice.ts'

const rootReducer = combineReducers({
    notes: noteSlice,
    tasks: tasksSlice,
    reminder: reminderReducer,
})

export const store = configureStore({ reducer: rootReducer })

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, UnknownAction>
export const useAppDispatch = useDispatch<AppDispatchType>
