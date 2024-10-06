import { Container } from '@/components';
import { Logo, Navigation } from './components';
import styles from './header.module.scss';
import Search from './components/Search/Search';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Logo />
          <div className={styles.headerControlls}>
            <Navigation />
            <Search />
          </div>
          <p>Войти</p>
        </div>
      </Container>
    </header>
  );
}

export default Header
