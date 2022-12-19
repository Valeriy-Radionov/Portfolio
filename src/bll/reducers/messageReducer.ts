import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { appApi, SendMessageRequestType } from "../../api/appApi"
const initialState = {
  sendMessageResult: "",
}
const slice = createSlice({
  name: "message",
  initialState: initialState,
  reducers: {
    sendMessage(state, action: PayloadAction<{ data: string }>) {
      state.sendMessageResult = action.payload.data
    },
  },
})

export const messageReducer = slice.reducer
export const sendMessage = slice.actions.sendMessage

export const sendMessageTC = createAsyncThunk("message/sendMessage", async (data: SendMessageRequestType, thunkApi) => {
  try {
    const response = await appApi.sendMessage(data)
    if (response.data) {
      thunkApi.dispatch(sendMessage({ data: response.data }))
      console.log(response.data)
    }
  } catch (e) {
    console.log("Failed to send message")
  }
})
