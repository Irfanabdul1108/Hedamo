import { ProductVersion } from '@/data/mockProducts';
import { StatusBadge } from './StatusBadge';
import { cn } from '@/lib/utils';

interface VersionHistoryProps {
  versions: ProductVersion[];
  className?: string;
}

export function VersionHistory({ versions, className }: VersionHistoryProps) {
  return (
    <div className={cn('rounded-lg border border-border bg-card overflow-hidden', className)}>
      <div className="px-5 py-3 border-b border-border bg-muted/30">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Version History
        </h3>
      </div>
      
      <div className="divide-y divide-border">
        {versions.map((version, index) => (
          <div
            key={version.version}
            className={cn(
              'px-5 py-4',
              index === 0 && 'bg-accent/20'
            )}
          >
            <div className="flex items-center justify-between gap-4 mb-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-foreground tabular-nums">
                  v{version.version}
                </span>
                <StatusBadge status={version.status} />
                {index === 0 && (
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                    Current
                  </span>
                )}
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">
                {new Date(version.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {version.changesDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
