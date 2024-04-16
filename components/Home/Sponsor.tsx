import { Section } from 'components';
import Image from 'next/image';

const Sponsor = () => {
  return (
    <Section>
      <h2>Sponsored by:</h2>
      <div className="flex flex-col md:flex-row md:gap-16">
        <Image
          src="/images/logos/starburst-sponsor.png"
          width="250"
          height="100"
          alt="Github"
        />
        <Image
          src="/images/logos/github-sponsor.png"
          width="250"
          height="100"
          alt="Github"
        />
      </div>
    </Section>
  );
};

export default Sponsor;
