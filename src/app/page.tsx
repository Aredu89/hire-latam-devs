import {
  Header,
  MainSection,
  TheBenefits,
  TheProcess
} from './layouts';
import { Rubik } from 'next/font/google';

const rubikFont = Rubik({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={rubikFont.className}>
      <Header />
      <MainSection />
      <TheBenefits />
      <TheProcess />
    </main>
  );
};
