import { Container } from '@/components';
import styles from './genrespage.module.scss';
import { GridList, Title } from '@/ui';
import { useEffect, useState } from 'react';
import { moviesRequests } from '@/api/requests';
import GenreCard from '@/components/GenreCard/GenreCard';
import { uuid } from '@/utils/uuid';

const GenresPage = () => {
  const [genres, setGenres] = useState<string[]>([])

  const getGenres = async () => {
    try {
      moviesRequests.fetchGenres().then(res => {
        setGenres(res.data)
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getGenres()
  }, [])

  return (
    <section className={styles.genresPage}>
      <Container>
        <Title className={styles.genresTitle}>
          Жанры фильмов
        </Title>
        <GridList>
          {genres.map(genre => (
            <GenreCard 
              key={uuid()} 
              name={genre} 
            />
          ))}
        </GridList>
      </Container>
    </section>
  );
}

export default GenresPage
