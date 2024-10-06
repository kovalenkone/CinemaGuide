import { GridList, Title } from '@/ui';
import styles from './topten.module.scss';
import { Container, MovieCard } from '@/components';
import { Movie } from '@/types/movie.type';
import { uuid } from '@/utils/uuid';

interface TopTenProps {
  movies: Movie[]
}

const TopTen = ({ movies }: TopTenProps) => {
  return (
    <section className={styles.topTen}>
      <Container>
        <Title>
          Топ 10 фильмов
        </Title>
        <GridList>
          {movies.map((movie, index) => (
            <MovieCard 
              key={uuid()}
              movie={movie}
              topNumber={index + 1}
            />
          ))}
        </GridList>
      </Container>
    </section>
  );
}

export default TopTen
