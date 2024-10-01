import LoupIcon from '@/assets/icons/LoupIcon';
import styles from './searchinput.module.scss';
import { ChangeEvent } from 'react';

interface SearchInputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className={styles.searchInputWrapper}>
      <LoupIcon />
      <input 
        type="search"
        placeholder='Поиск'
        value={value}
        className={styles.searchInput}
        onChange={onChange} 
      />
    </div>
  );
}

export default SearchInput
