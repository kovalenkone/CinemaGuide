
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../modules';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer />
    </div>
  );
}

export default Layout
