import { Badge } from './ui/badge';
import { cn } from './ui/utils';

interface StatusBadgeProps {
  status: 'rascunho' | 'em_revisao' | 'publicado' | 'ativo' | 'pendente' | 'concluido';
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusConfig = {
    rascunho: {
      label: 'Rascunho',
      className: 'bg-slate-100 text-slate-700',
    },
    em_revisao: {
      label: 'Em Revisão',
      className: 'bg-amber-100 text-amber-700',
    },
    publicado: {
      label: 'Publicado',
      className: 'bg-emerald-100 text-emerald-700',
    },
    ativo: {
      label: 'Ativo',
      className: 'bg-emerald-100 text-emerald-700',
    },
    pendente: {
      label: 'Pendente',
      className: 'bg-amber-100 text-amber-700',
    },
    concluido: {
      label: 'Concluído',
      className: 'bg-teal-100 text-teal-700',
    },
  };

  const config = statusConfig[status];

  return (
    <Badge variant="secondary" className={cn(config.className, className)}>
      {config.label}
    </Badge>
  );
}
