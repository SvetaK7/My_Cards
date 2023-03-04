import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "../features/auth/auth-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export const useAppDispatch:() => AppDispatch=useDispatch
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector

export type StateType = ReturnType<typeof rootReducer>;