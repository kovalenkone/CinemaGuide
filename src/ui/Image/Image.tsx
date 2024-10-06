import { HTMLAttributes } from 'react';
import styles from './image.module.scss';
import placeholderImage from '@/assets/images/placeholder-image.jpg'
import cn from 'classnames'

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src?: string
  alt: string
  fit?: 'cover' | 'contain'
}

const Image = ({ src, alt, fit, ...props }: ImageProps) => {
  return (
    <img 
      src={src ? src : placeholderImage} 
      alt={alt}
      className={cn(styles.image, props.className)}
      data-image-fit={fit}
      {...props} 
    />
  );
}

export default Image
