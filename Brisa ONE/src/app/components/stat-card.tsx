import { Card, CardContent } from './ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from './ui/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning';
}

export function StatCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend,
  trendValue,
  variant = 'default' 
}: StatCardProps) {
  const variantStyles = {
    default: 'bg-white border-slate-200',
    primary: 'bg-teal-50 border-teal-200',
    success: 'bg-emerald-50 border-emerald-200',
    warning: 'bg-amber-50 border-amber-200',
  };

  const iconStyles = {
    default: 'text-slate-600',
    primary: 'text-teal-600',
    success: 'text-emerald-600',
    warning: 'text-amber-600',
  };

  return (
    <Card className={cn('border', variantStyles[variant])}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="text-sm font-medium text-slate-600 mb-1">{title}</div>
            <div className="text-3xl font-semibold text-slate-900 mb-2">{value}</div>
            {description && (
              <div className="text-sm text-slate-600">{description}</div>
            )}
            {trend && trendValue && (
              <div className={cn(
                'text-sm font-medium mt-2',
                trend === 'up' && 'text-emerald-600',
                trend === 'down' && 'text-red-600',
                trend === 'neutral' && 'text-slate-600'
              )}>
                {trend === 'up' && '↑ '}
                {trend === 'down' && '↓ '}
                {trendValue}
              </div>
            )}
          </div>
          {Icon && (
            <div className={cn('w-12 h-12 rounded-lg bg-white border flex items-center justify-center', iconStyles[variant])}>
              <Icon className="w-6 h-6" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
