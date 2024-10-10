export const appUrls = {
  home: '/',
  genres: '/genres',
  genre: `/genres/:genre`,
  genGenreUrl: (genre: string) => `/genres/${genre}`,
  movie: `/movie/:id`,
  genMovieUrl: (id: number) => `/movie/${id}`,
  profile: '/profile'
}

export const authUrls = {
  login: '/auth/login',
  logout: '/auth/logout',
  user: '/user',
  profile: '/profile',
}

export const favoritesUrls = {
  favorites: '/favorites',
  favoritesWithId: (id: string) => `/favorites/${id}`
}

export const moviesUrls = {
  movie: '/movie',
  topTen: '/movie/top10',
  genres: '/movie/genres',
  movieWithId: (id: string) => `/movie/${id}`,
  random: '/movie/random'
}