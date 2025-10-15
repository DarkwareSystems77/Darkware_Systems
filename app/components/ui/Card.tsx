import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '~/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = false, children, ...props }, ref) => {
    const variants = {
      default: 'bg-gray-800/50 border border-gray-700/50',
      elevated: 'bg-gray-800/70 border border-gray-600/50 shadow-xl',
      outlined: 'bg-transparent border border-gray-600/50',
      filled: 'bg-gray-800 border border-gray-700',
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-xl p-6 transition-all duration-200',
          variants[variant],
          hover && 'hover:shadow-lg hover:scale-[1.02]',
          className
        )}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
