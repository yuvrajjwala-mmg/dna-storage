'use client';

import { useRef } from 'react';
import WhyNotCard from '@/app/(root)/(home)/_components/why-not-card';
import { WHY_DNA_CARD } from '@/data/why-dna-card';
import { cn } from '@/lib/utils';
import { useScrambleOnEnter } from '@/hooks/useScrambleOnEnter';

const WhyDNA = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const lineOneRef = useRef<HTMLElement | null>(null);
  const lineTwoRef = useRef<HTMLElement | null>(null);

  useScrambleOnEnter(containerRef, [lineOneRef, lineTwoRef], {
    start: 'top 70%',
    durationSeconds: 0.9,
    once: true,
  });

  return (
    <section className='bg-[url("/images/background/why-dna.png")] bg-cover bg-center bg-no-repeat px-4'>
      <div
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className='container py-32 mx-auto flex flex-col items-stretch justify-between gap-16 min-h-[900px] h-screen relative'
      >
        <div className='ml-36'>
          <div className='bg-clip-text text-transparent bg-gradient-to-r from-[#9CC1C1] to-[#D0DBDB] text-3xl font-black font-neue-machina'>Why DNA</div>
          <div className='bg-clip-text text-transparent bg-gradient-to-r from-[#9CC1C1] to-[#D0DBDB] text-6xl font-black font-neue-machina'>
            <div
              ref={lineOneRef as React.RefObject<HTMLDivElement>}
              className='text-start'
            >
              This is not
            </div>
            <div
              ref={lineTwoRef as React.RefObject<HTMLDivElement>}
              className='ml-36'
            >
              just storage
            </div>
          </div>
        </div>
        <div className='flex items-center justify-evenly flex-1'>
          <div className=''>
            <div className='relative text-[#F3F3F3] w-[400px] px-4 py-3 text-center'>
              <div className='absolute top-0 left-0 border-t border-l border-[9CC1C1] w-8 h-8' />
              DNA opens a path to molecular computing where information is processed inside strands unlocking levels of scale and parallelism silicon will never
              match.
              <div className='absolute bottom-0 right-0 border-b border-r border-[9CC1C1] w-8 h-8' />
            </div>
          </div>
          <div className='flex items-stretch justify-center relative'>
            {WHY_DNA_CARD.map((card, index) => (
              <WhyNotCard
                key={card.title}
                card={card}
                className={cn('', index === 1 ? 'absolute top-8 z-10' : '')}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDNA;
