import { useEffect, useState } from 'react';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import styles from './search.module.scss';
import { Definition } from '../interfaces/dictionary';

const Search = () => {

  const [searching, setSearching] = useState(false);
  const [inputWord, setInputWord] = useState('');
  const [selectedWord, setSelectedWord] = useState('');

  const { data, refetch } = useQuery({
    queryKey: ['getSuggestions'],
    enabled: false,
    queryFn: () => 
      axios
      .get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${inputWord}?key=${import.meta.env.VITE_DICTIONARY_KEY}`)
      .then((response: Definition[] | string[] | any) => {
        const definitions = Array.isArray(response.data) ? response.data : [];
        if(definitions.length === 0) { return [] }
        if(typeof definitions[0] === 'string' || definitions[0] instanceof String) {
          return definitions.splice(0, 4);
        } else {
          const word = definitions[0] as Definition;
          return [word.meta.id.replace(':1', '')];
        }
      })
  });

  const { data: wordDefinition, refetch: singleFetch } = useQuery({
    queryKey: ['getMeaning'],
    enabled: false,
    queryFn: () => 
      axios
      .get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${selectedWord}?key=${import.meta.env.VITE_DICTIONARY_KEY}`)
      .then((response: any) => {
        return response.data[0];        
      })
  });

  useEffect(() => {
    if(selectedWord !== '') {
      singleFetch();
    }
  }, [selectedWord, singleFetch]);

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
