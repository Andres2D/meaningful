import styles from './search.module.scss';
import { useState } from 'react';

const Search = () => {

  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    setSearching(true);
  };
  
  return (
    <div className={styles.search}>
      <input 
        className={styles.input} 
        type="text" 
        placeholder='wallpaper'
        onChange={handleSearch}
      />
      {
        searching &&
        <ul className={styles.results}>
          <li className={styles.item}>test</li>
          <li className={styles.item}>test 3</li>
          <li className={styles.item}>test 4</li>
        </ul>
      }
    </div>
  )
};

export default Search;
