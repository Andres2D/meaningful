import axios from "axios";
import { Definition, ServerResponse } from '../interfaces/dictionary';

const getFetchUrl = (word: string) => 
  `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${import.meta.env.VITE_DICTIONARY_KEY}`

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
  .then((response: ServerResponse | any) => {
    return response.data[0]      
  })
};
