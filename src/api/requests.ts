import { moviesUrls } from "@/constants/urls"
import { api } from "./api"

export const authRequests = {
  login: () => {
    
  }
}

export const moviesRequests = {
  random: () => {
    return api.get(moviesUrls.random)
  }
}