import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Developed by &nbsp;
      <a 
        href="https://github.com/Andres2D/meaningful" 
        target='_blank' 
        className={styles.repo}>
          Andres2D
      </a>
      <p>v1.1.0</p>
    </footer>
  )
};

export default Footer;
