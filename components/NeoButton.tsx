import React from 'react';
import { motion } from 'framer-motion';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'black';
  children: React.ReactNode;
}

export const NeoButton: React.FC<NeoButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyle = "px-6 py-3 font-bold border-4 border-black text-lg transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";
  
  const variants = {
    primary: "bg-neo-green text-black shadow-neo hover:shadow-neo-hover hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black shadow-neo hover:shadow-neo-hover hover:-translate-y-1 hover:-translate-x-1",
    black: "bg-black text-white shadow-neo-sm border-white hover:bg-neo-purple hover:text-black hover:border-black",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
