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
        <Card />
      </section>
      <Footer />
    </>
  )
};

export default Layout;
