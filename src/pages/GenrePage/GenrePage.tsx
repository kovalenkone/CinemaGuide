import { Button, GridList, Title } from '@/ui';
import styles from './genrepage.module.scss';
import { useEffect, useState } from 'react';
import { Movie } from '@/types/movie.type';
import { Container, MovieCard } from '@/components';
import { appUrls } from '@/constants/urls';
import { useParams } from 'react-router-dom';
import { moviesRequests } from '@/api/requests';

const GenrePage = () => {
  const COUNT_LIMIT = 15
  const [movies, setMovies] = useState<Movie[]>([])
  const [moviesPage, setMoviesPage] = useState<number>(0)
  const { genre } = useParams()
  
  const getMoviesByGenre = async (page: number) => {
    if (!genre) return

    await moviesRequests.fetchMoviesByGenre(genre, COUNT_LIMIT, page).then(res => {
      setMovies(prev => [...prev, ...res.data])
    })
  }

  const handleShowMore = () => {
    setMoviesPage(prev => prev + 1)
    getMoviesByGenre(moviesPage + 1)
  }

  useEffect(() => {
    getMoviesByGenre(0)
  }, [])
  
  return (
    <section className={styles.genrePage}>
      <Container>
        <Title 
          backUrl={appUrls.genres} 
          className={styles.genreTitle}
          size='large'
        >
          {genre}
        </Title>
        <GridList>
          {movies.map(movie => (
            <MovieCard movie={movie} />
          ))}
        </GridList>
        <Button 
          color='secondary' 
          style={{ margin: '64px auto 0 auto' }}
          onClick={handleShowMore}
        >
          Показать еще
        </Button>
      </Container>
    </section>
  );
}

export default GenrePage
