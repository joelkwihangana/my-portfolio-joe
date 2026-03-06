import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as Variants;

const bentoItemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    },
  },
} as Variants;

export function BentoGrid({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div 
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min ${className}`}
      variants={bentoGridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}

export function BentoCard({ 
  children, 
  className = "",
  featured = false 
}: { 
  children: ReactNode; 
  className?: string;
  featured?: boolean;
}) {
  return (
    <motion.div 
      variants={bentoItemVariants}
      className={`
        relative group overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800
        transition-all duration-300 hover:shadow-xl hover:-translate-y-1
        ${featured ? "md:col-span-2 md:row-span-2" : "col-span-1"}
        ${className}
      `}
    >
      {/* Decorative gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-transparent dark:from-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}
