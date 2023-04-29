import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import styles from './search.module.scss';

const Search = () => {

  const [searching, setSearching] = useState(false);
  const { data, refetch } = useQuery({
    queryKey: ['getMeaning'],
    enabled: false,
    queryFn: () => 
      fetch('https://api.dictionaryapi.dev/api/v2/entries/en/wall')
      .then((response: any) => {
        console.log(response);
      })
  })

  const handleSearch = () => {
    setSearching(true);
    refetch();
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
