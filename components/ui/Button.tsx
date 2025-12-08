import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'solid', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 transition-all duration-300 font-sans tracking-wide text-sm font-semibold uppercase flex items-center justify-center gap-2";
  
  const variants = {
    solid: "bg-accent text-white hover:bg-accent-dark shadow-md hover:shadow-lg",
    outline: "border border-accent text-accent hover:bg-accent hover:text-white",
    ghost: "text-primary hover:text-accent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};