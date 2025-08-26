import Image from 'next/image';

const TheShift = () => {
  return (
    <section className='bg-[url("/images/background/the-shift.png")] bg-cover bg-center bg-no-repeat flex flex-col justify-between items-stretch gap-24 min-h-[900px] h-screen py-32 px-4'>
      <div className='text-center space-y-4 text-[#9CC1C1]'>
        <div className='text-4xl font-black font-neue-machina'>The Shift</div>
        <div className='text-2xl font-neue-machina'>
          Silicon is reaching its limits.
          <br />
          DNA is not.
        </div>
      </div>
      <div className='border-y border-[#9CC1C1] relative flex-1 flex flex-col items-stretch'>
        <Image
          src='/images/the-shift-orb.png'
          alt='the-shift-line'
          width={100}
          height={100}
          className='absolute -top-[50px] left-1/2 -translate-x-1/2'
        />
        <div className='w-3/4 mx-auto border-x border-[#9CC1C1] text-center space-y-10 flex-1 flex flex-col justify-center items-center text-xl text-[#9CC1C1]'>
          <div>
            Today&#39;s data storage is fragile. Drives fail. Formats die. Cloud servers
            <br />
            disappear. Humanity is generating more information than existing
            <br />
            infrastructure can hold and most of it will vanish within decades.
          </div>

          <div>
            DNA has carried nature&#39;s code for billions of years and can now carry ours. It
            <br />
            can store the entirety of human knowledge for thousands of years in a form
            <br />
            smaller than a grain of sand.
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheShift;
