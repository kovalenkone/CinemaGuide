import { Container } from '@/components';
import { Logo, Navigation } from './components';
import styles from './header.module.scss';
import Search from './components/Search/Search';
import UserControl from './components/UserControl/UserControl';
import { useEffect } from 'react';
import { authRequests } from '@/api/requests';

const Header = () => {
  useEffect(() => {
    console.log('12')
    const fetchProfile = async () => {
      await authRequests.profile()
    }

    fetchProfile()
  })

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Logo />
          <div className={styles.headerControlls}>
            <Navigation />
            <Search />
          </div>
          <UserControl user={null} />
        </div>
      </Container>
    </header>
  );
}

export default Header
