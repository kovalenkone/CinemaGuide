import { ReactNode } from 'react';
import styles from './text.module.scss';
import cn from 'classnames'

interface TextProps {
  color?: 'white' | 'grey'
  size?: 'sm' | 'default'
  isBold?: boolean,
  children: ReactNode
}

const Text = ({ color = 'white', size = 'default', children, isBold = false }: TextProps) => {
  return (
    <p
      className={styles.text}
      data-color={color}
      data-size={size}
      style={{ fontWeight: isBold ? '700' : '400' }}
    >
      {children}
    </p>
  );
}

export default Text
