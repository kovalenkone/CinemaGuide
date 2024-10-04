import styles from './moviecard.module.scss';
import imgg from '@/assets/images/card.jpg'

const MovieCard = () => {
  return (
    <article className={styles.movieCard}>
      <span className={styles.movieCardNumber}>1</span>
      <div className={styles.movieCardInner}>
        <a className={styles.movieCardLink} href="" aria-label={'Ссылка на фильм: ' + 'fefef'}>
          Воздух
        </a>
        <img className={styles.movieCardImage} src={imgg} alt="" />
      </div>
    </article>
  );
}

export default MovieCard
