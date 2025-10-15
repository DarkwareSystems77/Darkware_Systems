import { motion } from 'framer-motion';
import type { Stat } from '~/lib/types';

export interface StatsProps {
  stats: Stat[];
  className?: string;
}

export function Stats({ stats, className = '' }: StatsProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <stat.icon className="w-8 h-8 text-green-400" />
          </div>
          <div className="text-3xl font-bold text-green-400 mb-2">
            {stat.value}
          </div>
          <div className="text-gray-300 text-sm">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
