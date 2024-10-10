import { Movie } from '@/types/movie.type';
import styles from './moviecard.module.scss';
import { Link } from 'react-router-dom';
import { appUrls } from '@/constants/urls';
import { Image } from '@/ui';

interface MovieCardProps {
  movie: Movie
  topNumber?: number
}

const MovieCard = ({ movie, topNumber }: MovieCardProps) => {
  return (
    <article className={styles.movieCard}>
      {topNumber && (
        <span className={styles.movieCardNumber}>
          {topNumber}
        </span>
      )}
      <div className={styles.movieCardInner}>
        <Link 
          to={appUrls.genMovieUrl(movie.id)} 
          className={styles.movieCardLink} 
          aria-label={`Ссылка на фильм: ${movie.originalTitle}`}>
          {movie.originalTitle}
        </Link>
        <Image 
          className={styles.movieCardImage} 
          src={movie.posterUrl} 
          alt={movie.originalTitle}
      
        />
      </div>
    </article>
  );
}

export default MovieCard
