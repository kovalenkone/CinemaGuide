import { authUrls, moviesUrls } from "@/constants/urls"
import { api } from "./api"
import { loginParams, registerParams } from "@/types/auth.type"

export const authRequests = {
  login: (data: loginParams) => {
    return api.post(authUrls.login, data)
  },
  register: (data: registerParams) => {
    return api.post(authUrls.user, data)
  },
  profile: () => {
    return api.get(authUrls.profile)
  }
}

export const moviesRequests = {
  fetchRandom: () => {
    return api.get(moviesUrls.random)
  },
  fetchTopTen: () => {
    return api.get(moviesUrls.topTen)
  },
  fetchGenres: () => {
    return api.get(moviesUrls.genres)
  },
  fetchMoviesByGenre: (genre: string, count: number, page: number) => {
    return api.get(moviesUrls.movie, { params: { genre, count, page }})
  },
  fetchMovieById: (id: string) => {
    return api.get(moviesUrls.movieWithId(id))
  }
  
}