import axios from "axios"

const API_URL = 'https://cinemaguide.skillbox.cc'

export const api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})