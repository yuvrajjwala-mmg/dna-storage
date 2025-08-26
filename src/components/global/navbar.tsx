import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='container mx-auto flex justify-between items-center py-4 px-4'>
      <div className='flex-1 flex justify-start items-center gap-6 text-white text-xl'>
        <div className='flex justify-center items-center gap-2'>Link One</div>
        <div className='flex justify-center items-center gap-2'>Link Two</div>
        <div className='flex justify-center items-center gap-2'>
          Link Three <ChevronDown />
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <Image
          src='/images/logo.svg'
          alt='logo'
          width={100}
          height={100}
        />
      </div>
      <div className='flex-1 flex justify-end items-center'>
        <Button className='bg-white text-black hover:bg-neutral-50 hover:text-black h-12 w-32 rounded-none text-lg'>Button</Button>
      </div>
    </nav>
  );
};

export default Navbar;
