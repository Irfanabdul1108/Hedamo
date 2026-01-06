import { cn } from '@/lib/utils';
import { ProductStatus } from '@/data/mockProducts';

interface StatusBadgeProps {
  status: ProductStatus;
  className?: string;
}

const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
  draft: {
    label: 'Draft',
    className: 'bg-status-draft-bg text-status-draft',
  },
  submitted: {
    label: 'Submitted',
    className: 'bg-status-submitted-bg text-status-submitted',
  },
  published: {
    label: 'Published',
    className: 'bg-status-published-bg text-status-published',
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium tracking-wide uppercase',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
