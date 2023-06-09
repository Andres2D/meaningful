import { actionMap } from '../constants/actions';
import Card from './card';
import Footer from './footer';
import styles from './layout.module.scss';
import Option from './option';
import Search from './search';

const Layout = () => {
  return (
    <>
      <h1 className={styles.logo}>meaningful.app</h1>
      <section className={styles.section}>
        <Search />
        <div className={styles.card}>
          <Card />
          <div className={styles.actions}>
            {
              Object.keys(actionMap).map((action) => (
                <Option key={action} action={action} />
              ))
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
};

export default Layout;
