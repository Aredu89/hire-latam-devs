import Image from 'next/image';
import styles from './page.module.css';

import { Header } from './layouts';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
};
