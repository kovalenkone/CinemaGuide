import StarIcon from '@/assets/icons/StarIcon';
import styles from './ratingbage.module.scss';
import cn from 'classnames'
import { formatRating } from '@/utils/formatRating';

interface RatingBageProps {
  rating: number
  size?: 'lg' | 'sm'
}

const RatingBage = ({ rating, size = 'lg' }: RatingBageProps) => {
  const ratingBageStyle = cn(
    styles.ratingBage,
    {[styles.lg]: size === 'lg'},
    {[styles.sm]: size === 'sm'},
    {[styles.hight]: rating >= 8},
    {[styles.medium]: rating >= 7 && rating < 8},
    {[styles.normal]: rating >= 6 && rating < 7},
    {[styles.low]: rating < 6},
  )

  return (
    <span className={ratingBageStyle}>
      <StarIcon />
      {formatRating(rating)}
    </span>
  );
}

export default RatingBage
