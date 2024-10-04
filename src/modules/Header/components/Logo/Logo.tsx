import { Link, useLocation } from 'react-router-dom';
import styles from './logo.module.scss';
import logo from '@/assets/images/logo.svg'

const Logo = () => {
  const { pathname } = useLocation()

  return (
    <>
      {pathname === '/' ? (
        <div className={styles.logo}>
          <img src={logo} alt="CinemaGuide" />
        </div>
      ) : (
        <Link to={'/'} className={styles.logo}>
          <img src={logo} alt="CinemaGuide" />
        </Link>
      )}
    </>
  );
}

export default Logo
