import axios from "axios";
import { Definition, ServerResponse, DefinitionResponse, WordleResponse } from '../interfaces/dictionary';

const getFetchUrl = (word: string) => 
  `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${import.meta.env.VITE_DICTIONARY_KEY}`

const wordleFetchUrl = 'https://wordle-answers-solutions.p.rapidapi.com/today';

export const getSuggestions = async (inputWord: string): Promise<string[]> => {
  return axios
  .get(getFetchUrl(inputWord))
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
};

export const getWordDefinition = async(word: string): Promise<Definition> => {
  return axios
  .get(getFetchUrl(word))
  .then((response: DefinitionResponse | any) => {
    const definition = response.data.filter((definition: Definition) => definition.shortdef.length !== 0);
    return definition[0];    
  })
};

export const getWordleWord = async(): Promise<{wordle: string, id: number}> => {
  return axios
  .get(wordleFetchUrl,
    {
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_WORDLE_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_WORDLE_HOST
      }
    })
  .then((response: WordleResponse | any) => {
    return {
      wordle: response.data.today,
      id: Date.now()
    }     
  })
};
