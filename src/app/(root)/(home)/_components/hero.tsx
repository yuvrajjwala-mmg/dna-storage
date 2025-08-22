import Navbar from '@/components/global/navbar';
import { SOCIALS } from '@/data/socials';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='bg-[url("/images/background/hero.png")] bg-cover bg-center bg-no-repeat relative z-0 min-h-[700px] h-screen flex flex-col items-stretch'>
      <Image
        src='/images/hero.gif'
        alt='hero'
        width={1000}
        height={1000}
        className='absolute w-screen h-screen object-center object-cover z-10'
      />
      <Navbar />
      <div className='py-16 flex-1 flex flex-col items-center'>
        <div className='container mx-auto flex flex-col items-stretch justify-between gap-16 relative z-20 flex-1 p-10'>
          <div className='absolute top-0 left-0 border-t border-l border-[9CC1C1] w-8 h-8' />
          <div className='text-6xl font-bold text-[#9CC1C1] font-neue-machina'>
            The Future of DATA
            <br />
            is Written in DNA
          </div>
          <div className='flex justify-end items-center gap-4 -mr-10'>
            <div className='flex flex-col justify-center items-center gap-6'>
              {SOCIALS.map((social) => (
                <Link
                  href={social.url}
                  key={social.icon}
                >
                  <Icon
                    icon={social.icon}
                    className='text-[#9CC1C1] text-[35px]'
                  />
                </Link>
              ))}
            </div>
            <div className='space-y-6'>
              <Icon
                icon='streamline-sharp:star-2-solid'
                className='text-[#9CC1C1] text-[40px]'
              />
              <div className='h-[300px] w-[2px] flex-1 bg-[#9CC1C1] mx-auto' />
            </div>
          </div>
          <div className='flex justify-between items-end'>
            <div className='p-4 relative'>
              <div className='absolute top-0 left-0 border-t border-l border-[9CC1C1] w-8 h-8' />
              <div className='border border-[#9CC1C1] p-2 text-center font-neue-machina font-black text-2xl text-[#9CC1C1]'>Enter the Genesis Era</div>
              <div className='absolute bottom-0 right-0 border-b border-r border-[9CC1C1] w-8 h-8' />
            </div>
            <div className='text-xl text-[#9CC1C1] text-end'>
              DNA computing and storage connected to Ethereum.
              <br />
              Biological permanence meets blockchain.
            </div>
          </div>
          <div className='absolute bottom-0 right-0 border-b border-r border-[9CC1C1] w-8 h-8' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
