import React from 'react';


interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold tracking-wider uppercase transition-all duration-300 ease-in-out rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50 ${className} animate-pulse-slow`}
    >
      {children}
    </button>
  );
};

export default Button;