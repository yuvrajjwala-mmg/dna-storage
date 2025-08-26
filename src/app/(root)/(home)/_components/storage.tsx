import Image from 'next/image';

const Storage = () => {
  return (
    <section className='bg-[url("/images/background/storage.png")] bg-cover bg-center bg-no-repeat px-4'>
      <div className='container py-32 mx-auto flex items-stretch justify-between gap-16 min-h-[900px] h-screen relative z-0'>
        <div className='flex flex-col justify-start font-neue-machina text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#9CC1C1] to-[#D0DBDB] font-black flex-1 relative z-20'>
          The First Physical Key to Molecular Storage
        </div>
        <Image
          src='/images/ui/storage-line.svg'
          alt='storage-line'
          width={1000}
          height={1000}
          className='absolute top-2/3 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10'
        />
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
