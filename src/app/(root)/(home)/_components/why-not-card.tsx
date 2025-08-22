import { cn } from '@/lib/utils';
import Image from 'next/image';

const WhyNotCard = ({ card, className }: { card: any; className?: string }) => {
  return (
    <div
      className={cn(
        'bg-[url("/images/background/why-dna-card.svg")] bg-cover bg-no-repeat bg-center p-8 space-y-5 text-[#F3F3F3] w-[300px] aspect-[357/423]',
        className
      )}
    >
      <Image
        src={card.imageUrl}
        alt={card.title}
        width={150}
        height={150}
      />
      <div className='text-2xl font-semibold'>{card.title}</div>
      <div>{card.description}</div>
    </div>
  );
};

export default WhyNotCard;
