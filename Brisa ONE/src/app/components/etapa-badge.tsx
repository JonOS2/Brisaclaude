import { cn } from './ui/utils';

interface EtapaBadgeProps {
  numero: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function EtapaBadge({ numero, className, size = 'md' }: EtapaBadgeProps) {
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
  };

  return (
    <div 
      className={cn(
        'rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold flex-shrink-0',
        sizeClasses[size],
        className
      )}
    >
      {numero}
    </div>
  );
}
