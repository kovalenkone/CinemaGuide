import styles from './detailsmovie.module.scss';
import { Container } from '@/components';
import randomImage from '@/assets/images/random.jpg'
import { Button, RatingBage, Text, Title } from '@/ui';
import FavoriteIcon from '@/assets/icons/FavoriteIcon';
import RandomIcon from '@/assets/icons/RandomIcon';

interface DetailsMovieProps {
  isRandom?: boolean
}

const DetailsMovie = ({  }: DetailsMovieProps) => {
  return (
    <section className={styles.detailsMovie}>
      <div className={styles.detailsMoviePreview}>
        <img src={randomImage} alt="" />
      </div>
      <div className={styles.detailsMovieInfo}>
        <Container>
          <div className={styles.detailsMovieInfoWrapper}>
            <div className={styles.detailsMovieInfoTop}>
              <RatingBage rating={8} />
              <Text value={'1979'} color='grey' size='sm' />
              <Text value={'детектив'} color='grey' size='sm' />
              <Text value={'1ч 7м'} color='grey' size='sm' />
            </div>
            <Title variant='h1' size='large' css={styles.detailsMovieTitle}>
              Шерлок Холмс и доктор Ватсон: Знакомство
            </Title>
            <Text 
              value={'Увлекательные приключения самого известного сыщика всех времен'}
              size='md'
              color='grey' 
            />
            <div className={styles.detailsMovieActions}>
              <Button color='secondary'>Трейлер</Button>
              <Button>О фильме</Button>
              <Button size='sm'><FavoriteIcon /></Button>
              <Button size='sm'><RandomIcon /></Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default DetailsMovie
