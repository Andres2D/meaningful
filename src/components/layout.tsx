import Card from './card';
import Footer from './footer';
import styles from './layout.module.scss';
import Search from './search';

const Layout = () => {
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
      <Footer />
    </>
  )
};

export default Layout;
