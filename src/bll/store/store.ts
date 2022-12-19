import { combineReducers, configureStore } from "@reduxjs/toolkit"
import thunkMiddleware from "redux-thunk"
import { messageReducer } from "../reducers/messageReducer"
import { pagesReducer } from "../reducers/pageReducer"

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

const rootReducer = combineReducers({
  dataPages: pagesReducer,
  message: messageReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
})
