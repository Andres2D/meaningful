import Card from "./components/card"
import Search from './components/search';
import styles from './App.module.scss';

const App = () => {
  return (
    <>
      <h1 className={styles.logo}>meaningful.app</h1>
      <section className={styles.section}>
        <Search />
        <Card 
          word="wallpaper"
          phonetic="/ˈwɔːlˌpeɪ.pər/ noun"
          meaning="paper that is pasted in vertical
          strips over the walls of a room to
          provide a decorative surface."
        />
      </section>
    </>
  )
};

export default App;
