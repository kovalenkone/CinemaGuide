import styles from './detailsmovie.module.scss';
import { Container } from '@/components';
import { Button, RatingBage, Text, Title } from '@/ui';
import FavoriteIcon from '@/assets/icons/FavoriteIcon';
import RandomIcon from '@/assets/icons/RandomIcon';
import { Movie } from '@/types/movie.type';
import { formatTime } from '@/utils/formatTime';
import { formatRating } from '@/utils/formatRating';

interface DetailsMovieProps {
  movie: Movie
  isRandom?: boolean
  onRandomClick?: () => void
}

const DetailsMovie = ({ movie, isRandom, onRandomClick }: DetailsMovieProps) => {
  return (
    <section className={styles.detailsMovie}>
      <div className={styles.detailsMoviePreview}>
        <img src={movie.posterUrl} alt={movie.originalTitle} />
      </div>

      <Container>
        <div className={styles.detailsMovieInfo}>
          <div className={styles.detailsMovieInfoTop}>
            <RatingBage rating={movie.tmdbRating} />
            <Text color='grey' size='sm'>
              {movie.releaseYear}
            </Text>
            <Text color='grey' size='sm'>
              {movie.genres.join(', ')}
            </Text>
            <Text color='grey' size='sm'>
              {formatTime(movie.runtime)}
            </Text>
          </div>
          <Title variant='h1' size='large' className={styles.detailsMovieTitle}>
            {movie.originalTitle}
          </Title>
          <Text color='grey'>
            {movie.plot}
          </Text>
          <div className={styles.detailsMovieActions}>
            <Button color='secondary'>Трейлер</Button>
            {isRandom && (
              <Button>О фильме</Button>
            )}
            <Button size='sm'><FavoriteIcon /></Button>
            {isRandom && (
              <Button onClick={onRandomClick} size='sm'><RandomIcon /></Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default DetailsMovie
