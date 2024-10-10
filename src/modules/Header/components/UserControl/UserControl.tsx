import { useDispatch } from 'react-redux';
import styles from './usercontrol.module.scss';
import { setIsLoginModalOpen } from '@/store/slices/modals.slice';
import { Link } from 'react-router-dom';
import cn from 'classnames'

interface UserControlProps {
  user: string | null
}

const UserControl = ({ user }: UserControlProps) => {
  const dispath = useDispatch()

  return (
    <div>
      {!user ? (
        <button
          className={styles.userControlButton} 
          onClick={() => dispath(setIsLoginModalOpen(true))}>
          Войти
        </button>
      ) : (
        <Link 
          to={'/profile'}
          className={cn(styles.userControlButton, styles.loggedin)} 
        >
          {user}
        </Link>
      )}
    </div>
  );
}

export default UserControl
