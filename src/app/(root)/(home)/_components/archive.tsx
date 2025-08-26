'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ARCHIVE_CAROUSEL } from '@/data/achive-carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

const Archive = () => {
  return (
    <section className='bg-[url("/images/background/archive.png")] bg-cover bg-center bg-no-repeat px-4'>
      <div className='container py-32 mx-auto flex flex-col items-stretch justify-between gap-16 min-h-[900px] h-screen relative'>
        <div className='bg-clip-text text-transparent bg-gradient-to-r from-[#9CC1C1] to-[#D0DBDB] text-8xl font-black font-neue-machina flex-1'>
          <div className='text-left'>The archive for the</div>
          <div className='text-right'>next thousand years</div>
        </div>
        <div>
          <Image
            src='/images/ui/archive-line-1.svg'
            alt='archive-card'
            width={1000}
            height={1000}
            className='mx-auto mb-8'
          />
          <Carousel
            plugins={[
              Autoplay({
                delay: 1000,
              }),
            ]}
          >
            <CarouselContent>
              {ARCHIVE_CAROUSEL.map((item, index) => (
                <CarouselItem
                  key={index}
                  className='flex justify-center items-center'
                >
                  <div className='bg-[url("/images/background/archive-card.svg")] bg-contain bg-center bg-no-repeat text-[#9CC1C1] aspect-[949/442] h-[400px] p-10'>
                    <div className='font-black font-neue-machina text-4xl'>{item.title}</div>
                    <div className='text-lg font-neue-machina'>{item.description}</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Image
            src='/images/ui/archive-line-2.svg'
            alt='archive-card'
            width={1000}
            height={1000}
            className='mx-auto'
          />
        </div>
      </div>
    </section>
  );
};

export default Archive;
