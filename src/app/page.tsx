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
import { CollapsedMenuProvider } from './context/collapsedMenu.context';

const rubikFont = Rubik({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={rubikFont.className}>
      <ContactFormProvider>
        <CollapsedMenuProvider>
          <Header />
        </CollapsedMenuProvider>
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
