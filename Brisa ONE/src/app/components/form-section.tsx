import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface FormSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'default' | 'highlight' | 'warning';
}

export function FormSection({ 
  title, 
  description, 
  children, 
  icon,
  variant = 'default' 
}: FormSectionProps) {
  const variantStyles = {
    default: '',
    highlight: 'border-2 border-teal-200',
    warning: 'border-2 border-amber-200',
  };

  const headerStyles = {
    default: '',
    highlight: 'bg-teal-50',
    warning: 'bg-amber-50',
  };

  return (
    <Card className={variantStyles[variant]}>
      <CardHeader className={headerStyles[variant]}>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className={variant !== 'default' ? 'pt-6' : ''}>
        {children}
      </CardContent>
    </Card>
  );
}
