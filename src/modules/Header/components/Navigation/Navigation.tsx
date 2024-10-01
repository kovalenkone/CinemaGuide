import { useLocation } from 'react-router-dom';
import styles from './navigation.module.scss';
import { navigation } from '../../constants/navigation';
import { uuid } from '@/utils/uuid';
import { NavLink } from '../../ui';

const Navigation = () => {
  const { pathname } = useLocation()

  return (
    <nav className={styles.navigation}>
      <ul>
        {navigation.map(nav => (
          <li key={uuid()}>
            <NavLink 
              link={nav}
              isCurrent={pathname === nav.path}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation
