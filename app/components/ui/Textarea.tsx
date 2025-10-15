import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { cn } from '~/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    const textareaId = props.id || props.name;
    const hasError = !!error;

    const textareaClasses = cn(
      'w-full px-3 py-2.5 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors resize-none',
      hasError
        ? 'border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400'
        : 'border-gray-600/50 focus:border-green-400 focus:ring-1 focus:ring-green-400',
      props.disabled && 'opacity-50 cursor-not-allowed',
      className
    );

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-1"
      >
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-gray-300"
          >
            {label}
            {props.required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          className={textareaClasses}
          {...props}
        />

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center text-sm text-red-400"
          >
            <AlertCircle className="w-4 h-4 mr-1" />
            {error}
          </motion.p>
        )}
      </motion.div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
