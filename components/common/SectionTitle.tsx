import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  gradientFrom?: 'primary' | 'secondary';
  gradientTo?: 'primary' | 'secondary';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  gradientFrom = 'primary',
  gradientTo = 'secondary',
  className = '',
}) => {
  // Tailwindの動的クラス名は使えないので、条件分岐で対応
  const gradientClass =
    gradientFrom === 'primary' && gradientTo === 'secondary'
      ? 'bg-gradient-to-r from-primary to-secondary'
      : 'bg-gradient-to-r from-secondary to-primary';

  return (
    <div className={`flex flex-col items-center mb-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-heading font-heading mb-3">
        {title}
      </h2>
      <div className={`h-1 w-16 ${gradientClass} rounded-full`}></div>
      {subtitle && (
        <p className="text-muted mt-4 text-sm tracking-widest uppercase">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;

