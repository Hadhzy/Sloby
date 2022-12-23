import React from 'react'
import axios, { Axios, AxiosRequestConfig } from 'axios'
import { User } from './types'

const API_URL = process.env.REACT_APP_API_URL

const axiosClient = axios.create({ baseURL: API_URL })
const config: AxiosRequestConfig = { withCredentials: true }

export const getAuthUser = () => axiosClient.get<User>(`auth/status`)
