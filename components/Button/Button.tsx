import { tv } from 'tailwind-variants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  outline?: boolean;
}

const Button = ({ color, size, outline, className, children }: ButtonProps) => {
  return (
    <button className={`${button({ color, size, outline })} ${className}`}>
      {children}
    </button>
  );
};

export default Button;

const button = tv({
  base: 'font-medium bg-transparent text-white rounded active:opacity-80',
  variants: {
    color: {
      primary: 'bg-orange-900 text-white hover:bg-orange-1000',
      secondary:
        'bg-transparent text-black dark:text-white border-[1px] border-orange-700 hover:bg-orange-300 hover:text-orange-1100',
    },
    size: {
      sm: 'px-4 py-1 text-[15px] h-[32px]',
      md: 'px-6 py-2 text-[15px] h-[40px]',
      lg: 'px-8 py-3 text-[17px] h-[48px]',
    },
    outline: {
      true: 'border hover:bg-white hover:text-black',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});
