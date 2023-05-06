import { useEffect, useState } from 'react';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getSuggestions, getWordDefinition } from '../helpers/search-api';
import styles from './search.module.scss';

const Search = () => {

  const [searching, setSearching] = useState(false);
  const [inputWord, setInputWord] = useState('');
  const [selectedWord, setSelectedWord] = useState('');

  const { data, refetch } = useQuery({
    queryKey: ['getSuggestions'],
    enabled: false,
    queryFn: () => getSuggestions(inputWord)
  });

  const { data: wordDefinition, refetch: singleFetch } = useQuery({
    queryKey: ['getMeaning'],
    enabled: false,
    queryFn: () => getWordDefinition(selectedWord)
  });

  useEffect(() => {
    if(selectedWord !== '') {
      singleFetch();
    }
  }, [selectedWord, singleFetch]);

  useEffect(() => {
    console.log(wordDefinition);
  }, [wordDefinition])

  const handleSearch = (event: any) => {
    setInputWord(event.target.value);
    setSearching(true);
    refetch();
  };
  
  const handleSearchWord = (wordSelected: string) => {
    setSelectedWord(wordSelected);
    setSearching(false);
  }
  
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
          {data?.map((definition: string, index: number) => 
            <li 
              key={index} 
              className={styles.item}
              onClick={() => handleSearchWord(definition)}>
                {definition}
            </li>
          )}
        </ul>
      }
    </div>
  )
};

export default Search;
