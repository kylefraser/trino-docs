interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section
      className={`container mx-auto flex flex-col items-center text-center py-16 gap-16 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
