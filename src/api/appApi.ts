import { AxiosResponse } from "axios"
import { axiosInstance } from "./axiosInstance"

export const appApi = {
  sendMessage(data: SendMessageRequestType) {
    return axiosInstance.post<SendMessageRequestType, AxiosResponse>(`${PathType.sendMessage}`, data)
  },
}

export type SendMessageRequestType = {
  email: string
  senderName: string
  message: string
}
enum PathType {
  sendMessage = "/feedback",
}
