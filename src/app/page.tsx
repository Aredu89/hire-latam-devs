import {
  Header,
  MainSection,
  TheBenefits
} from './layouts';
import { Rubik } from 'next/font/google';

const rubikFont = Rubik({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={rubikFont.className}>
      <Header />
      <MainSection />
      <TheBenefits />
    </main>
  );
};
