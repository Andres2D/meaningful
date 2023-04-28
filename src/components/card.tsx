import styles from './card.module.scss';
import { Word } from '../interfaces/dictionary';

const Card = ({meaning, phonetic, word}: Word) => {
  return (
    <section className={styles.card}>
      <h1 className={styles.word}>{word}</h1>
      <p className={styles.phonetic}>{phonetic}</p>
      <p className={styles.meaning}>
        {meaning}
      </p>
    </section>
  )
};

export default Card;
