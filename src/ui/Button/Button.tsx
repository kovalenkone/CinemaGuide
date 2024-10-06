import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.scss';
import cn from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary'
  size?: 'sm' | 'md'
  isLoading?: boolean
  children: ReactNode
}

const Button = ({ 
  color = 'primary', 
  size = 'md',
  isLoading, 
  children, 
  ...props 
}: ButtonProps) => {
  const buttonClass = cn(
    styles.button,
    {[styles.primary]: color === 'primary'},
    {[styles.secondary]: color === 'secondary'},
    {[styles.sm]: size === 'sm'},
    {[styles.md]: size === 'md'},
  )

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}

export default Button
