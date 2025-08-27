'use client';

import { ATOMS_ACCORDION } from '@/data/atoms-accordion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useScrambleOnEnter } from '../../../../hooks/useScrambleOnEnter';

const Atoms = () => {
  const [selectedItem, setSelectedItem] = useState<any>(ATOMS_ACCORDION[0].items[0]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerLine1Ref = useRef<HTMLDivElement | null>(null);
  const headerLine2Ref = useRef<HTMLDivElement | null>(null);

  useScrambleOnEnter(sectionRef, [headerLine1Ref, headerLine2Ref]);
  return (
    <section
      ref={sectionRef}
      className='bg-[url("/images/background/atoms.png")] bg-cover bg-center bg-no-repeat px-4'
    >
      <div className='container py-32 mx-auto flex items-stretch justify-between gap-16 min-h-[900px] h-screen relative'>
        <div className='space-y-16 flex-1'>
          <div className='bg-clip-text text-transparent bg-gradient-to-r from-[#9CC1C1] to-[#D0DBDB] text-6xl font-black font-neue-machina'>
            <div ref={headerLine1Ref}>From atoms</div>
            <div ref={headerLine2Ref}>to Ethereum</div>
          </div>
          <Accordion
            type='single'
            collapsible
            defaultValue={ATOMS_ACCORDION[0].key}
            className='w-[320px]'
          >
            {ATOMS_ACCORDION.map((item, index) => (
              <AccordionItem
                key={item.key}
                value={item.key}
                className={cn('border-none')}
              >
                <AccordionTrigger
                  showIcon={false}
                  className='bg-[#5D6F6F] text-[#9CC1C1] data-[state=open]:text-white px-4 data-[state=closed]:mb-4 w-full hover:no-underline text-lg'
                >
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className={cn('px-4 ml-4 border-l border-[#9CC1C1] space-y-2 text-[#5D6F6F] flex flex-col')}>
                  {item.items.map((item, index) => (
                    <Button
                      variant='ghost'
                      key={item.title}
                      className={cn(
                        'p-0 h-auto justify-start hover:bg-transparent transition-all rounded-none',
                        selectedItem.key === item.key ? 'text-[#9CC1C1] hover:text-[#9CC1C1]' : 'text-[#5D6F6F] hover:text-[#9CC1C1]/50',
                        index === 0 && 'mt-4'
                      )}
                      onClick={() => setSelectedItem(item)}
                    >
                      {item.title}
                    </Button>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <Separator
          orientation='vertical'
          className='data-[orientation=vertical]:h-[450px] bg-[#9CC1C1] absolute right-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'
        />
        <div className='flex flex-col justify-center items-center gap-10 flex-1'>
          <Image
            src={selectedItem.imageUrl}
            alt={selectedItem.title}
            width={300}
            height={300}
          />
          <div className='text-[#9CC1C1] text-4xl text-center font-neue-machina w-2/3'>{selectedItem.description}</div>
        </div>
      </div>
    </section>
  );
};

export default Atoms;
