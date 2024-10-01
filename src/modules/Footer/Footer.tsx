import { Container } from '@/components';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>LLC «Мультимедиа Визион»</p>
        <p>Все права защищены </p>
      </Container>
    </footer>
  );
}

export default Footer
