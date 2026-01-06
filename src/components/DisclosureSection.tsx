import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface DisclosureSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function DisclosureSection({ title, children, className }: DisclosureSectionProps) {
  return (
    <section className={cn('rounded-lg border border-border bg-card overflow-hidden', className)}>
      <div className="px-5 py-3 border-b border-border bg-muted/30">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </h3>
      </div>
      <div className="px-5 py-4 text-sm text-foreground/90 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
