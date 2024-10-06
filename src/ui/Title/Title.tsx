import { HTMLAttributes, ReactNode } from 'react';
import styles from './title.module.scss';
import cn from 'classnames'
import { Link } from 'react-router-dom';
import BackIcon from '@/assets/icons/BackIcon';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TitleProps extends HTMLAttributes<HTMLTitleElement> {
  variant?: HeadingTag
  size?: 'default' | 'large'
  color?: 'white' | 'grey'
  children: ReactNode
  backUrl?: string
}

const Title = ({ 
  variant: Heading = 'h2', 
  size = 'default', 
  color = 'white',
  backUrl, 
  children, 
  ...props 
}: TitleProps) => {

  if (backUrl) {
    return (
      <Heading
      className={cn(styles.title, styles.backTitle, props.className)} 
      data-size={size} 
      data-color={color}
      >
        <Link to={backUrl}>
          <BackIcon />
          <span>{children}</span>
        </Link>
      </Heading>
    )
  }

  return (
    <Heading
      className={cn(styles.title, props.className)} 
      data-size={size} 
      data-color={color}
    >
      {children}
    </Heading>
  );
}

export default Title
