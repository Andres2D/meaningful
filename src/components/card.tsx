import { useSelector } from 'react-redux';
import styles from './card.module.scss';
import { RootState } from '../interfaces/store';

const Card = () => {
  const { meaning, phonetic, type, word } = useSelector((state: RootState) => state.meaning);

  return (
    <section className={styles.card} id="wallpaper">
      <h1 className={styles.word}>{word}</h1>
      <p className={styles.phonetic}>{phonetic} {type}</p>
      <p className={styles.meaning}>
        {meaning}
      </p>
    </section>
  )
};

export default Card;
