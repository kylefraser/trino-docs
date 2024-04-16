interface HeroProps {
  title: string;
}

const Hero = ({ title }: HeroProps) => {
  return (
    <div className="bg-orange-200">
      <div className="container text-center py-16">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
