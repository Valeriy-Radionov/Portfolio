import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { state } from "../state"
const initialState = state.EN()
const slice = createSlice({
  name: "dataPages",
  initialState: initialState,
  reducers: {
    getDataPages(state, action: PayloadAction<{ data: typeof initialState }>) {
      return action.payload.data
    },
  },
})

export const pagesReducer = slice.reducer
export const getDataPages = slice.actions.getDataPages

export const getUsersTC = createAsyncThunk("dataPages/getData", async (data: typeof initialState, thunkApi) => {
  try {
    thunkApi.dispatch(getDataPages({ data }))
  } catch (e) {
    console.log("Can't to get dataPages. Check pagesReducer or dispatch AsyncThunk getUser")
  }
})
