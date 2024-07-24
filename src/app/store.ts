import { AnyAction, combineReducers } from 'redux'
import { useDispatch } from 'react-redux'
import { configureStore, UnknownAction } from '@reduxjs/toolkit'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { noteSlice } from '../entities/noteItem/model/noteSlice.ts'

const rootReducer = combineReducers({
    notes: noteSlice,
})

export const store = configureStore({ reducer: rootReducer })

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, UnknownAction>
export const useAppDispatch = useDispatch<AppDispatchType>