import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section className='bg-[url("/images/background/contact.png")] bg-cover bg-center bg-no-repeat px-4'>
      <div className='container py-32 mx-auto flex flex-col justify-center items-end gap-8 min-h-[900px] h-screen'>
        <div className='bg-clip-text text-transparent bg-gradient-to-r from-[#9CC1C1] to-[#D0DBDB] text-end text-8xl font-black font-neue-machina'>
          The internet
          <br />
          is temporary
          <br />
          DNA is not
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
