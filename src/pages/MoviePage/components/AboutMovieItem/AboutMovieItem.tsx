import styles from './aboutmovieitem.module.scss';

interface AboutMovieItemProps {
  name: string
  value: string
}

const AboutMovieItem = ({ name, value }: AboutMovieItemProps) => {
  return (
    <div className={styles.aboutMovieItem}>
      <span>{name}</span>
      <span>{value}</span>
    </div>
  );
}

export default AboutMovieItem
