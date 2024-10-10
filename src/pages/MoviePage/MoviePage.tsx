import { DetailsMovie } from '@/modules';
import styles from './moviepage.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Movie } from '@/types/movie.type';
import { moviesRequests } from '@/api/requests';
import AboutMovie from './components/AboutMovie/AboutMovie';

const MoviePage = () => {
  const [movie, setMovie] = useState<Movie | null>(null)
  const { id } = useParams()

  const getMovieById = async () => {
    if (!id) return

    await moviesRequests.fetchMovieById(id).then(res => {
      if (!res.data) return

      setMovie(res.data)
    })
  }

  useEffect(() => {
    getMovieById()
  }, [])

  return (
    <section className={styles.moviePage}>
      {movie ? (
        <>
          <DetailsMovie movie={movie} />
          <AboutMovie movie={movie} />
        </>
      ) : (
        <p>Кино не найдено</p>
      )}
    </section>
  );
}

export default MoviePage
