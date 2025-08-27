'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useScrambleOnEnter } from '../../../../hooks/useScrambleOnEnter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Storage = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const rightLineRef = useRef<HTMLDivElement | null>(null);
  const rotatedLineRef = useRef<HTMLDivElement | null>(null);

  useScrambleOnEnter(sectionRef, [headerRef]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (!rightLineRef.current || !rotatedLineRef.current) return;

      // Prepare initial state
      gsap.set(rightLineRef.current, { width: 0 });
      gsap.set(rotatedLineRef.current, { width: 0 });

      // Animate right horizontal line first, then rotated line
      gsap
        .timeline({
          scrollTrigger: {
            trigger: rightLineRef.current,
            start: 'top bottom',
            end: '+=400',
            scrub: 0.5,
          },
        })
        .to(rightLineRef.current, {
          width: '100%',
          ease: 'none',
          onStart: () => rightLineRef.current?.setAttribute('data-before', 'show'),
          onComplete: () => rightLineRef.current?.removeAttribute('data-before'),
          onReverseStart: () => rightLineRef.current?.setAttribute('data-before', 'show'),
          onReverseComplete: () => rightLineRef.current?.removeAttribute('data-before'),
        })
        .to(rotatedLineRef.current, {
          width: '50%',
          ease: 'none',
          onStart: () => rotatedLineRef.current?.setAttribute('data-before', 'show'),
          onReverseComplete: () => rotatedLineRef.current?.removeAttribute('data-before'),
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className='bg-[url("/images/background/storage.png")] bg-cover bg-center bg-no-repeat px-4'
    >
      <div className='container py-32 mx-auto flex items-stretch justify-between gap-16 min-h-[900px] h-screen relative z-0'>
        <div
          ref={headerRef}
          className='flex flex-col justify-start font-neue-machina text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#9CC1C1] to-[#D0DBDB] font-black flex-1 relative z-20'
        >
          The First Physical Key to Molecular Storage
        </div>
        <div className='absolute top-[40%] -translate-y-1/2 left-[60%] -translate-x-1/2 z-10 w-1/2'>
          <div
            ref={rotatedLineRef}
            className='relative h-[2px] bg-[#9CC1C1] rotate-[110deg] origin-left w-0 before:content-[""] before:absolute before:-right-1 before:top-1/2 before:-translate-y-1/2 before:transform before:w-4 before:h-4 before:bg-[#9CC1C1] before:rounded-full before:block before:opacity-0 data-[before=show]:before:opacity-100'
          />
          <div
            ref={rightLineRef}
            className='relative h-[2px] bg-[#9CC1C1] w-0 ml-auto before:content-[""] before:absolute before:-left-1 before:top-1/2 before:-translate-y-1/2 before:transform before:w-4 before:h-4 before:bg-[#9CC1C1] before:rounded-full before:block before:opacity-0 data-[before=show]:before:opacity-100 after:content-[""] after:absolute after:-right-1 after:top-1/2 after:-translate-y-1/2 after:transform after:w-4 after:h-4 after:bg-[#9CC1C1] after:rounded-full after:block'
          />
        </div>
        <div className='flex-1 flex justify-center items-center relative z-20'>
          <Image
            src='/images/card.png'
            alt='storage-card'
            width={100}
            height={100}
            className='aspect-auto w-full'
          />
        </div>
        <div className='flex flex-col justify-end font-sans text-[#F3F3F3] flex-1 relative z-20'>
          This physical key is a bridge between the digital and molecular worlds, a proof that data can live far beyond the lifespan of any device.
        </div>
      </div>
    </section>
  );
};

export default Storage;
