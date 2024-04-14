import { Button } from 'components';

const Banner = () => {
  return (
    <div className="w-full p-8 bg-orange-200">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h2>Trino Fest</h2>
        <h3>June 13th, 2024</h3>
        <div className="flex gap-4 mt-8">
          <Button>Register now</Button>
          <Button color="secondary">Submit a talk</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
