import { Button, Section } from 'components';
import Link from 'next/link';

const Resources = () => {
  return (
    <Section>
      <h2>Resources</h2>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1px,1fr,1px,1fr] gap-8">
        <div className="flex flex-col gap-2 items-center">
          <h3>Reading material</h3>
          <p>
            Get a copy of{' '}
            <Link href="/trino-the-definitive-guide">
              the definitive guide about the Trino distributed query engine
            </Link>
            . Useful for beginners and existing users.
          </p>
          <p>
            For technical background, read our paper:{' '}
            <Link href="/paper">Presto: SQL on Everything</Link>
          </p>
        </div>
        <div className="h-[1px] lg:h-full w-full lg:w-[1px] bg-pink-900"></div>
        <div className="flex flex-col gap-2 items-center">
          <h3>Community chat</h3>
          <p>
            The community is very active and helpful on Slack, with users and
            developers from all around the world. If you need help using or
            running Trino, this is the place to ask.
          </p>
          <Button className="mt-4">Join us on Slack</Button>
        </div>
        <div className="h-[1px] lg:h-full w-full lg:w-[1px] bg-pink-900"></div>
        <div className="flex flex-col gap-2 items-center">
          <h3>Subscribe to our blog</h3>
          <p>
            Curious to learn new insights into the community behind this
            incredible query engine? Subscribe to our blog where the project
            maintainers, contributors, and users share updates, stories,
            knowledge, and lessons learned.
          </p>
          <Button className="mt-4">Subscribe</Button>
        </div>
      </div>
    </Section>
  );
};

export default Resources;
