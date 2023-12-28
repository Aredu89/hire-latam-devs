import {
  Header,
  MainSection,
  TheBenefits,
  TheProcess,
  Technologies,
  Contact,
  Footer,
  ContactForm
} from './layouts';
import { Rubik } from 'next/font/google';
import { ContactFormProvider } from './context/contactForm.context';

const rubikFont = Rubik({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={rubikFont.className}>
      <ContactFormProvider>
        <Header />
        <MainSection />
        <TheBenefits />
        <TheProcess />
        <Technologies />
        <Contact />
        <Footer />
        <ContactForm />
      </ContactFormProvider>
    </main>
  );
};
