import { ReactNode } from 'react';
import styles from './gridlist.module.scss';

interface GridListProps {
  children: ReactNode
}

const GridList = ({ children }: GridListProps) => {
  return (
    <div className={styles.gridList}>
      {children}
    </div>
  );
}

export default GridList
