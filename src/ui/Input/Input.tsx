import { InputHTMLAttributes, ReactNode } from 'react';
import styles from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
}

const Input = ({ icon, ...props }: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      {icon && (
        <>
          {icon}
        </>
      )}
      <input
        className={styles.input}
        {...props}
      />
    </div>
  );
}

export default Input
