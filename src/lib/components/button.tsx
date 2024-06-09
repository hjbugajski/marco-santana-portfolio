import { forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ asChild = false, className, ...props }, ref) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      ref={ref}
      {...props}
      className={cn(
        'inline-flex h-12 w-fit flex-row items-center justify-center gap-2 whitespace-nowrap border-2 border-black px-6 text-lg font-medium transition-all duration-[225ms] ease-in-out hover:bg-black/5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] focus:outline-none focus:ring-2 focus:ring-black/75 focus:ring-offset-2 focus:ring-offset-white dark:border-white hover:dark:bg-white/10 hover:dark:shadow-[4px_4px_0px_0px_rgba(255,255,255)] focus:dark:ring-white/75 focus:dark:ring-offset-black',
        className,
      )}
    />
  );
});
Button.displayName = 'Button';

export { Button };
