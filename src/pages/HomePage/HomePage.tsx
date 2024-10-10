import { DetailsMovie } from '@/modules';
import styles from './homepage.module.scss';
import { TopTen } from './modules';
import { useEffect, useState } from 'react';
import { moviesRequests } from '@/api/requests';
import { Movie } from '@/types/movie.type';
import axios from 'axios';
import { formatTime } from '@/utils/formatTime';

const HomePage = () => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null)
  const [topTenMovies, setTopTenMovies] = useState<Movie[]>([])

  const getRandomMovie = async () => {
    moviesRequests.fetchRandom().then(res => {
      setRandomMovie(res.data)
    })
  }

  const getTopTenMovie = async () => {
    moviesRequests.fetchTopTen().then(res => {
      setTopTenMovies(res.data)
    })
  }

  useEffect(() => {
    console.log('2')
    axios.all(
      [getRandomMovie(), getTopTenMovie()]
    )
  }, [])

  return (
    <div className={styles.homePage}>
      {randomMovie && (
        <DetailsMovie 
          movie={randomMovie} 
          isRandom
          onRandomClick={getRandomMovie} 
        />
      )}
      <TopTen movies={topTenMovies} />
    </div>
  );
}

export default HomePage
