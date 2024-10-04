import { ReactNode } from 'react';
import styles from './title.module.scss';
import cn from 'classnames'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TitleProps {
  variant?: HeadingTag
  size?: 'default' | 'large'
  color?: 'white' | 'grey'
  children: ReactNode
  css: string
}

const Title = ({ variant: Heading = 'h2', size = 'default', color = 'white', css, children }: TitleProps) => {

  return (
    <Heading
      className={cn(styles.title, css)} 
      data-size={size} 
      data-color={color}
    >
      {children}
    </Heading>
  );
}

export default Title
