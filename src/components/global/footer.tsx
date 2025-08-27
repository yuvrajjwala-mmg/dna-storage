'use client';

import { SOCIALS } from '@/data/socials';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useScrambleOnEnter } from '../../hooks/useScrambleOnEnter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const leftLineRef = useRef<HTMLDivElement | null>(null);
  const rightLineRef = useRef<HTMLDivElement | null>(null);

  useScrambleOnEnter(footerRef, [line1Ref, line2Ref]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      if (leftLineRef.current && rightLineRef.current) {
        gsap.set(leftLineRef.current, { width: 0 });
        gsap.set(rightLineRef.current, { width: 0 });

        gsap.to(leftLineRef.current, {
          width: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: leftLineRef.current,
            start: 'top bottom',
            end: '+=400',
            scrub: 0.5,
          },
        });

        gsap.to(rightLineRef.current, {
          width: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: rightLineRef.current,
            start: 'top bottom',
            end: '+=400',
            scrub: 0.5,
          },
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className='bg-gradient-to-b from-[#000000] to-[#101516]'
    >
      <div className='container py-32 mx-auto flex flex-col items-stretch justify-center gap-16 min-h-[900px] h-screen'>
        <div className='bg-clip-text text-transparent bg-gradient-to-r from-[#9CC1C1] to-[#D0DBDB] text-center text-8xl font-black font-neue-machina'>
          <div ref={line1Ref}>DATA THAT</div>
          <div ref={line2Ref}>DOES NOT DIE</div>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <div
            ref={leftLineRef}
            className='h-[2px] bg-[#9CC1C1] w-0'
          />
          <Icon
            icon='streamline-sharp:star-2-solid'
            className='text-[#D9D9D9] text-[60px]'
          />
          <div
            ref={rightLineRef}
            className='h-[2px] bg-[#9CC1C1] w-0'
          />
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
