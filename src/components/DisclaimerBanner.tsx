import { cn } from '@/lib/utils';

interface DisclaimerBannerProps {
  className?: string;
}

export function DisclaimerBanner({ className }: DisclaimerBannerProps) {
  return (
    <div
      className={cn(
        'text-[11px] text-muted-foreground leading-relaxed tracking-wide',
        className
      )}
      role="note"
      aria-label="Disclosure disclaimer"
    >
      <span className="text-muted-foreground/70">
        All information is declared by the producer. Hedamo does not verify accuracy.
      </span>
    </div>
  );
}
