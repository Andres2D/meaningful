import styles from './option.module.scss';
import { ButtonAction } from '../types/actions';
import { actionMap } from '../constants/actions';
import { useQuery } from '@tanstack/react-query';
import { getWordDefinition, getWordleWord } from '../helpers/search-api';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { meaningSliceActions } from '../store/meaning-slice';
import { RootState } from '../interfaces/store';

type Props = {
  action: ButtonAction | string
};

const Option = ({action}: Props) => {

  const dispatch = useDispatch();
  const [wordle, setWordle] = useState<{wordle: string, id: number} | null >(null);
  const { word } = useSelector((state: RootState) => state.meaning);

  const { data: wordleWord, refetch } = useQuery({
    queryKey: ['getWordle'],
    enabled: false,
    queryFn: () => getWordleWord()
  });

  const { data: wordleMeaning, refetch: wordleRefetch } = useQuery({
    queryKey: ['getMeaning'],
    enabled: false,
    queryFn: () => getWordDefinition(wordle?.wordle || '')
  });

  useEffect(() => {
    setWordle(null);
  }, [word]);
  
  useEffect(() => {
    if(wordle) {
      wordleRefetch();
    }
  }, [wordle, dispatch]);

  useEffect(() => {
    if(wordleWord && wordleWord.wordle?.trim() !== '') {
      setWordle(wordleWord);
    }
  }, [word, wordleWord, dispatch]);

  useEffect(() => {
    if(wordleMeaning) {
      dispatch(meaningSliceActions.setMeaning(wordleMeaning)); 
    }
  }, [wordleMeaning, dispatch]);

  const {src, alt, class: classAction } = actionMap[action];

  const handleClick = async () => {
    if(classAction) {
      classAction.execute();
    } else if(alt === 'wordle') {
      refetch();
    } else {
      return;
    }
  };

  return (
    <button className={styles.option} onClick={handleClick}>
      <img 
        src={src} 
        alt={alt}
        className={styles.icon}
      />
    </button>
  )
};

export default Option;
