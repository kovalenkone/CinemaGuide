import { moviesUrls } from "@/constants/urls"
import { api } from "./api"

export const authRequests = {
  login: () => {
    
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