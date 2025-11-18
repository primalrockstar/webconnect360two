import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  background?: 'white' | 'gray';
}

const Section = ({ 
  children, 
  className = '', 
  title, 
  subtitle,
  background = 'white' 
}: SectionProps) => {
  const bgClass = background === 'gray' ? 'bg-medical-gray' : 'bg-white';
  
  return (
    <section className={`py-16 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
