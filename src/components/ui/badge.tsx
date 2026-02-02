import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        {
          'bg-primary-100 text-primary-800': variant === 'default',
          'bg-sand-200 text-sand-500': variant === 'secondary',
          'border border-primary-300 text-primary-700': variant === 'outline',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
