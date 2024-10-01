import { useState } from 'react';
import { SearchInput } from '../../ui';
import styles from './search.module.scss';

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <div className={styles.searchWrapper}>
      <SearchInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
    </div>
  );
}

export default Search
