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
import Head from 'next/head';
import { Rubik } from 'next/font/google';
import { ContactFormProvider } from './context/contactForm.context';
import { CollapsedMenuProvider } from './context/collapsedMenu.context';

const rubikFont = Rubik({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>HireLatamDevs: Hire Top-Tier Software Engineers from Latin America</title>
        <meta name="description" content="We Specialize in connecting US companies with talented Latin American Engineers. Save more than 40% of development costs hiring Software Developers from LATAM" />
        <meta name="keywords" content="Software Engineer, Developer, hire, hiring, LATAM, Latin America, talent, top-tier, Software, Nearshore, Hire LATAM developers, Hire developers in Latin America, Hire software developers in Latin America, Hire remote developers in LATAM, Hire LATAM tech talent, Hire LATAM programmers, Hire LATAM engineers, LATAM software development team, LATAM developers for hire, Hire nearshore developers, Outsourcing to LATAM, Nearshore software development, LATAM IT outsourcing, Hire dedicated developers in LATAM, LATAM tech outsourcing, LATAM software outsourcing companies, Affordable developers in LATAM, LATAM development companies, Hire full-stack developers in LATAM, Best countries in LATAM to hire developers, Hire Python developers in LATAM, Hire JavaScript developers in Latin America, Hire mobile app developers in LATAM, Cost to hire developers in LATAM, Benefits of hiring developers in LATAM, Hire remote developers from Colombia, Hire remote developers from Argentina, Hire remote developers from Brazil, Hire remote developers from Chile, Hire developers in Argentina, Hire developers in Colombia, Hire developers in Brazil, Hire developers in Mexico, Hire developers in Chile, Hire developers in Peru, Hire developers in Uruguay, Hire React developers, Hire Node.js developers, Hire Angular developers, Hire Java developers, Hire Python developers, Hire AI/ML developers, Hire DevOps engineers, Hire fintech developers, Hire e-commerce developers, Hire SaaS developers, Hire blockchain developers, Hire gaming developers, Why hire developers in LATAM?, Advantages of nearshore outsourcing, Cost of hiring developers in LATAM vs. the US, How to hire remote developers in LATAM, Best practices for hiring LATAM developers, LATAM developer salary guide, Top tech skills in LATAM, HireLATAM alternatives, Best companies to hire LATAM developers, Top LATAM developer hiring platforms" />
        <meta property="og:title" content="HireLatamDevs: Hire Top-Tier Software Engineers from Latin America" />
        <meta property="og:description" content="Hire LATAM devs and reduce costs by more than 40%" />
      </Head>
      <div className={rubikFont.className}>
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
      </div>
    </>
  );
};
