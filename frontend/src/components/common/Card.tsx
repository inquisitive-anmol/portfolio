import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  bordered = true,
  hoverable = false,
}) => {
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };

  const borderStyles = bordered ? 'border border-gray-200 dark:border-gray-700' : '';
  
  const hoverStyles = hoverable 
    ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
    : '';

  return (
    <div 
      className={`
       bg-[#001a1e] rounded-lg shadow-sm 
        ${paddingStyles[padding]}
        ${borderStyles}
        ${hoverStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;