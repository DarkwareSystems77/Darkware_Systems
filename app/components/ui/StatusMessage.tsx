import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { cn } from '~/lib/utils';

export interface StatusMessageProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  className?: string;
}

const statusConfig = {
  success: {
    icon: CheckCircle,
    className: 'text-green-400 bg-green-400/10 border-green-400/20',
  },
  error: {
    icon: AlertCircle,
    className: 'text-red-400 bg-red-400/10 border-red-400/20',
  },
  warning: {
    icon: AlertTriangle,
    className: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  },
  info: {
    icon: Info,
    className: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  },
};

export function StatusMessage({ type, message, className }: StatusMessageProps) {
  const config = statusConfig[type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={cn(
        'flex items-start space-x-2 border rounded-lg p-3 sm:p-4',
        config.className,
        className
      )}
    >
      <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
      <p className="text-sm">{message}</p>
    </motion.div>
  );
}
