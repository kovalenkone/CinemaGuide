import styles from './authlayout.module.scss';
import { ReactNode } from 'react';
import logo from '@/assets/images/logo.svg'
import { Image } from '@/ui';

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className={styles.authLayout}>
      <div className={styles.authLayoutLogo}>
        <Image src={logo} alt="CinemaGuide" fit='cover' />
      </div>
      {children}
    </div>
  );
}

export default AuthLayout
