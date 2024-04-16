import Image from 'next/image';
import { Button, Section } from 'components';

const Join = () => {
  return (
    <Section>
      <h2>Join the fastest growing open-source analytics project</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 w-full grid-rows-[repeat(8,40px)] md:grid-rows-[repeat(4,50px)] lg:grid-rows-[repeat(2,60px)] gap-2 md:gap-4 lg:gap-8">
        {logos.map((logo) => (
          <div key={logo} className="relative w-full h-full">
            <Image
              fill
              className="object-contain"
              src={'/images/logos/' + logo}
              alt={logo}
            />
          </div>
        ))}
      </div>
      <Button>Learn how these and many other organizations use Trino</Button>
    </Section>
  );
};

export default Join;

export const logos = [
  'aws.png',
  'didi.png',
  'electronic-arts-small.png',
  'gett.png',
  'goldman-sachs-small.png',
  'grab.png',
  'instacart-small.png',
  'jiosaavn-small.png',
  'linkedin-small.png',
  'lyft-small.png',
  'naver-small.png',
  'netflix-small.png',
  'nielsen-small.png',
  'ntt-communications-small.png',
  'pinterest-small.png',
  'quintoandar-small.png',
  'razorpay-small.png',
  'redhat-small.png',
  'salesforce-small.png',
  'shopify-small.png',
  'starburst-small.png',
  'stripe-small.png',
];
