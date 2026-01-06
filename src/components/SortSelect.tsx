import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export type SortOption = 'name-asc' | 'name-desc' | 'date-desc' | 'date-asc';

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  className?: string;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'date-desc', label: 'Newest first' },
  { value: 'date-asc', label: 'Oldest first' },
  { value: 'name-asc', label: 'Name A–Z' },
  { value: 'name-desc', label: 'Name Z–A' },
];

export function SortSelect({ value, onChange, className }: SortSelectProps) {
  return (
    <div className={cn('relative', className)}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className={cn(
          'w-full h-8 px-2.5 pr-7 rounded border border-input bg-background',
          'text-[12px] text-muted-foreground appearance-none cursor-pointer',
          'focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring',
          'transition-subtle'
        )}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground/50 pointer-events-none" />
    </div>
  );
}
