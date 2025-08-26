import { SOCIALS } from '@/data/socials';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-[#000000] to-[#101516]'>
      <div className='container py-32 mx-auto flex flex-col items-stretch justify-center gap-16 min-h-[900px] h-screen'>
        <div className='bg-clip-text text-transparent bg-gradient-to-r from-[#9CC1C1] to-[#D0DBDB] text-center text-9xl font-black font-neue-machina'>
          DATA THAT
          <br />
          DOES NOT DIE
        </div>
        <div className='flex justify-center items-center gap-3'>
          <div className='h-[2px] flex-1 bg-[#9CC1C1]' />
          <Icon
            icon='streamline-sharp:star-2-solid'
            className='text-[#D9D9D9] text-[20px]'
          />
          <div className='h-[2px] flex-1 bg-[#D9D9D9]' />
        </div>
        <div className='flex justify-center items-center gap-6'>
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
      </div>
    </footer>
  );
};

export default Footer;
