export const appUrls = {
  home: '/',
  genres: '/genres',
  genre: (name: string) => `/genres/${name}`,
  movie: (name: string) => `/movie/${name}`,
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
