interface BadgeProps {
  text: string;
  variant?: 'active' | 'beta' | 'development' | 'planned' | 'default';
  className?: string;
}

const Badge = ({ text, variant = 'default', className = '' }: BadgeProps) => {
  const variantClasses = {
    active: 'bg-green-100 text-green-800 border-green-200',
    beta: 'bg-blue-100 text-blue-800 border-blue-200',
    development: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    planned: 'bg-purple-100 text-purple-800 border-purple-200',
    default: 'bg-gray-100 text-gray-800 border-gray-200',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${variantClasses[variant]} ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
