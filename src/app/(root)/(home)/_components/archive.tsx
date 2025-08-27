'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ARCHIVE_CAROUSEL } from '@/data/achive-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Archive = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const bottomLineRef = useRef<HTMLDivElement | null>(null);
  const bottomLineAngleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.set(lineRef.current, { width: 0 });

        gsap.to(lineRef.current, {
          width: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top bottom',
            end: '+=400',
            scrub: 0.5,
            onEnter: () => lineRef.current?.setAttribute('data-after', 'show'),
            onLeaveBack: () => lineRef.current?.removeAttribute('data-after'),
          },
          onComplete: () => lineRef.current?.removeAttribute('data-after'),
          onReverseComplete: () => lineRef.current?.removeAttribute('data-after'),
        });
      }

      if (bottomLineRef.current && bottomLineAngleRef.current) {
        gsap.set(bottomLineRef.current, { width: 0 });
        gsap.set(bottomLineAngleRef.current, { width: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: bottomLineRef.current,
            start: 'top bottom',
            end: '+=400',
            scrub: 0.5,
          },
        });

        tl.to(bottomLineRef.current, {
          width: '60%',
          ease: 'none',
          onStart: () => bottomLineRef.current?.setAttribute('data-after', 'show'),
          onComplete: () => bottomLineRef.current?.removeAttribute('data-after'),
          onReverseComplete: () => bottomLineRef.current?.removeAttribute('data-after'),
        }).to(bottomLineAngleRef.current, {
          width: '25%',
          ease: 'none',
          onStart: () => bottomLineAngleRef.current?.setAttribute('data-after', 'show'),
          onReverseComplete: () => bottomLineAngleRef.current?.removeAttribute('data-after'),
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      className='bg-[url("/images/background/archive.png")] bg-cover bg-center bg-no-repeat px-4'
      ref={sectionRef}
    >
      <div className='container py-16 mx-auto flex flex-col items-stretch justify-between gap-8 lg:gap-10 2xl:gap-10 min-h-[900px] h-screen relative'>
        <div className='bg-clip-text text-transparent bg-gradient-to-r from-[#9CC1C1] to-[#D0DBDB] text-6xl font-black font-neue-machina flex-1 w-2/3 mx-auto'>
          <div className='text-left'>The archive for the</div>
          <div className='text-right'>next thousand years</div>
        </div>
        <div className='flex flex-col items-stretch justify-between gap-12'>
          <div className='flex items-center justify-start gap-8 mx-auto w-3/5'>
            <div
              ref={lineRef}
              className='h-[2px] bg-[#9CC1C1] w-0'
            />
            <Icon
              icon='streamline-sharp:star-2-solid'
              className='text-[#D9D9D9] text-[20px]'
            />
          </div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 1000,
              }),
            ]}
            className='w-2/3 mx-auto'
          >
            <CarouselContent className='relative z-50 mb-12'>
              {ARCHIVE_CAROUSEL.map((item, index) => (
                <CarouselItem
                  key={index}
                  className='flex justify-center items-center'
                >
                  <div className='bg-[url("/images/background/archive-card.svg")] bg-contain bg-center bg-no-repeat text-[#9CC1C1] aspect-[949/442] h-[300px] p-8'>
                    <div className='font-black font-neue-machina text-2xl'>{item.title}</div>
                    <div className='font-neue-machina'>{item.description}</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className='w-[70%] absolute bottom-16 left-[60%] -translate-x-1/2'>
            <div
              ref={bottomLineRef}
              className='relative h-[2px] bg-[#9CC1C1] w-0 before:content-[""] before:absolute before:-left-1 before:top-1/2 before:-translate-y-1/2 before:transform before:w-4 before:h-4 before:bg-[#9CC1C1] before:rounded-full before:block after:content-[""] after:absolute after:-right-1 after:top-1/2 after:-translate-y-1/2 after:transform after:w-4 after:h-4 after:bg-[#9CC1C1] after:rounded-full after:block after:opacity-0 data-[after=show]:after:opacity-100'
            />
            <div
              ref={bottomLineAngleRef}
              className='h-[2px] bg-[#9CC1C1] w-0 absolute top-0 after:content-[""] after:absolute after:-right-1 after:top-1/2 after:-translate-y-1/2 after:transform after:w-4 after:h-4 after:bg-[#9CC1C1] after:rounded-full after:block after:opacity-0 data-[after=show]:after:opacity-100'
              style={{ left: '60%', transformOrigin: 'left center', transform: 'rotate(-45deg)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Archive;
