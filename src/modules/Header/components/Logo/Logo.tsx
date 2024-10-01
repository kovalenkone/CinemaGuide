import styles from './logo.module.scss';
import logo from '@/assets/images/logo.svg'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="CinemaGuide" />
    </div>
  );
}

export default Logo
