import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = '', hover = false }: CardProps) => {
  const hoverClass = hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : '';
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
