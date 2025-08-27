'use client';

import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import { useScrambleOnEnter } from '../../../../hooks/useScrambleOnEnter';

const Contact = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const line3Ref = useRef<HTMLDivElement | null>(null);

  useScrambleOnEnter(sectionRef, [line1Ref, line2Ref, line3Ref]);
  return (
    <section
      ref={sectionRef}
      className='bg-[url("/images/background/contact.png")] bg-cover bg-center bg-no-repeat px-4'
    >
      <div className='container py-32 mx-auto flex flex-col justify-center items-end gap-8 min-h-[900px] h-screen'>
        <div className='bg-clip-text text-transparent bg-gradient-to-r from-[#9CC1C1] to-[#D0DBDB] text-end text-8xl font-black font-neue-machina'>
          <div ref={line1Ref}>The internet</div>
          <div ref={line2Ref}>is temporary</div>
          <div ref={line3Ref}>DNA is not</div>
        </div>
        <div className='flex justify-end items-center gap-4'>
          <Button
            size='lg'
            className='border border-[#9CC1C1] rounded-none bg-gradient-to-r from-[#9CC1C1] to-[#4A5B5B] text-black font-normal'
          >
            Contact for DNA
          </Button>
          <Button
            size='lg'
            className='border border-white rounded-none bg-white text-black font-normal'
          >
            Developers DOC
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
