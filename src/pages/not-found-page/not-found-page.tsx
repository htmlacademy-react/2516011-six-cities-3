import { Link } from 'react-router-dom';
import { AppRoutes } from '../../utils/const';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>404 Not Found</h1>
      <p className={styles.notFoundText}>The page you are looking for does not exist.</p>
      <Link to={AppRoutes.MAIN} className={styles.homeLink}>Go to Home</Link>
    </div>
  );
}

export default NotFoundPage;
