import { menuItem } from './menu-item.types';
import styles from './menu-item.module.css';

const MenuItem = ({
  title,
  slug
}: menuItem) => {

  return(
    <a className={styles.menuItem} href={slug}>{title}</a>
  )
};

export default MenuItem;