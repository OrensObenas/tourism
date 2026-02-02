'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary-700 text-white hover:bg-primary-800 shadow-soft hover:shadow-soft-lg',
        secondary:
          'bg-sand-200 text-primary-900 hover:bg-sand-300',
        outline:
          'border-2 border-primary-700 bg-transparent text-primary-700 hover:bg-primary-50',
        ghost:
          'hover:bg-sand-100 text-primary-700',
        link:
          'text-primary-700 underline-offset-4 hover:underline',
        whatsapp:
          'bg-green-500 text-white hover:bg-green-600 shadow-soft hover:shadow-soft-lg',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 rounded-xl px-4 text-xs',
        lg: 'h-13 rounded-2xl px-8 text-base',
        xl: 'h-14 rounded-3xl px-10 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
