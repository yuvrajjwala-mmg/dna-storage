import Archive from '@/app/(root)/(home)/_components/archive';
import Atoms from '@/app/(root)/(home)/_components/atoms';
import Contact from '@/app/(root)/(home)/_components/contact';
import Hero from '@/app/(root)/(home)/_components/hero';
import Storage from '@/app/(root)/(home)/_components/storage';
import TheShift from '@/app/(root)/(home)/_components/the-shift';
import WhyDNA from '@/app/(root)/(home)/_components/why-dna';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <TheShift />
      <WhyDNA />
      <Storage />
      <Archive />
      <Atoms />
      <Contact />
    </main>
  );
};

export default HomePage;
