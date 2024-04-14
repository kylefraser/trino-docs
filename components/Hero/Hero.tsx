import { Button } from 'components';

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col items-center text-center py-40">
      <h1>Trino</h1>
      <h2>A query engine that runs at ludicrous speed</h2>
      <p>
        Fast distributed SQL query engine for big data analytics that helps you
        explore your data universe.
      </p>
      <div className="flex gap-4 mt-8">
        <Button>Download Trino</Button>
        <Button color="secondary">Download Trino</Button>
      </div>
    </div>
  );
};

export default Hero;
