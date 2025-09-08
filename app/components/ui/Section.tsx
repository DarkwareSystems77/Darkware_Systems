import { useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Section({
  id,
  children,
  className = '',
  delay = 0,
}: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id={id} ref={ref} className={`py-20 px-4 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay }}
        className="container mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
