import { Building2, Calendar, Paperclip } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DisclosureSummaryProps {
  producer: string;
  dateCreated: string;
  hasEvidence: boolean;
  className?: string;
}

export function DisclosureSummary({ 
  producer, 
  dateCreated, 
  hasEvidence, 
  className 
}: DisclosureSummaryProps) {
  const formattedDate = new Date(dateCreated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className={cn('rounded-lg border border-border bg-card overflow-hidden', className)}>
      <div className="px-5 py-3 border-b border-border bg-muted/30">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Disclosure Summary
        </h2>
      </div>
      
      <div className="divide-y divide-border">
        <div className="flex items-center gap-4 px-5 py-4">
          <div className="flex items-center justify-center w-9 h-9 rounded-md bg-muted/50">
            <Building2 className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground mb-0.5">Declared by</p>
            <p className="text-sm font-medium text-foreground">{producer}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-5 py-4">
          <div className="flex items-center justify-center w-9 h-9 rounded-md bg-muted/50">
            <Calendar className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground mb-0.5">Date declared</p>
            <p className="text-sm font-medium text-foreground">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-5 py-4">
          <div className="flex items-center justify-center w-9 h-9 rounded-md bg-muted/50">
            <Paperclip className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground mb-0.5">Supporting evidence</p>
            <p className="text-sm font-medium text-foreground">
              {hasEvidence ? 'Attached by producer' : 'Not attached'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
