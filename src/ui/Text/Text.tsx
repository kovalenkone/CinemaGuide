import styles from './text.module.scss';
import cn from 'classnames'

interface TextProps {
  color?: 'white' | 'grey'
  size?: 'sm' | 'md'
  isBold?: boolean,
  value: string | number
}

const Text = ({ color = 'white', size = 'md', value, isBold = false }: TextProps) => {
  const textStyle = cn(
    {[styles.textSm]: size === 'sm'},
    {[styles.textMd]: size === 'md'},
    {[styles.white]: color === 'white'},
    {[styles.grey]: color === 'grey'},
  )

  return (
    <p 
      className={textStyle}
      style={{ fontWeight: isBold ? '700' : '400' }}
    >
      {value}
    </p>
  );
}

export default Text
