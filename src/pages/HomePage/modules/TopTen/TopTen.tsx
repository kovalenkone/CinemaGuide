import { GridList, Title } from '@/ui';
import styles from './topten.module.scss';
import { Container, MovieCard } from '@/components';

const TopTen = () => {
  return (
    <section className={styles.topTen}>
      <Container>
        <Title>
          Топ 10 фильмов
        </Title>
        <GridList>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </GridList>
      </Container>
    </section>
  );
}

export default TopTen
