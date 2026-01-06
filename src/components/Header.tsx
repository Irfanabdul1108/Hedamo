import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-border/60 bg-background',
        className
      )}
    >
      <div className="container">
        <div className="flex h-16 items-center">
          <Link 
            to="/" 
            className="flex items-baseline gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <span className="text-[15px] font-medium text-foreground tracking-tight">
              Hedamo
            </span>
            <span className="hidden sm:inline text-[11px] text-muted-foreground font-normal tracking-[0.08em] uppercase">
              Disclosure Platform
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
