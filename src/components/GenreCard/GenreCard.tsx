import { Link } from 'react-router-dom';
import styles from './genrecard.module.scss';
import { Image } from '@/ui';
import { appUrls } from '@/constants/urls';

interface GenreCardProps {
  name: string
}

const GenreCard = ({ name }: GenreCardProps) => {
  return (
    <article className={styles.genreCard}>
      <Link className={styles.genreCardLink} to={appUrls.genGenreUrl(name)}>
        <div className={styles.genreCardImage}>
          <Image alt={name} fit='cover' />
        </div>
        <div className={styles.genreCardBody}>
          <h3 className={styles.genreCardTitle}>
            {name}
          </h3>
        </div>
      </Link>
    </article>
  );
}

export default GenreCard
