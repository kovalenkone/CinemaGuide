import { uuid } from '@/utils/uuid';
import AboutMovieItem from '../AboutMovieItem/AboutMovieItem';
import styles from './aboutmovie.module.scss';
import { Movie } from '@/types/movie.type';
import { Container } from '@/components';
import { Title } from '@/ui';

interface AboutMovieProps {
  movie: Movie
}

const AboutMovie = ({ movie }: AboutMovieProps) => {
  const aboutItems = [
    { name: 'Язык оригинала', value: movie.language },
    { name: 'Бюджет', value: movie.budget },
    { name: 'Выручка', value: movie.revenue },
    { name: 'Режиссёр', value: movie.director },
    { name: 'Продакшен', value: movie.production },
    { name: 'Награды', value: movie.awardsSummary },
  ]

  return (
    <Container>
      <div className={styles.aboutMovie}>
        <Title className={styles.aboutMovieTitle}>
          О фильме
        </Title>
        <div className={styles.aboutMovieItems}>
          {aboutItems.map(item => (
            <>
              {item.value && (
                <AboutMovieItem
                  key={uuid()} 
                  name={item.name} 
                  value={item.value} 
                />
              )}
            </>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default AboutMovie
