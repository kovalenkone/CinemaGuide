import { DetailsMovie } from '@/modules';
import styles from './homepage.module.scss';
import { TopTen } from './modules';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <DetailsMovie />
      <TopTen />
    </div>
  );
}

export default HomePage
