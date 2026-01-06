import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
}

export function FilterSelect({
  value,
  onChange,
  options,
  placeholder = 'Select...',
  className,
}: FilterSelectProps) {
  return (
    <div className={cn('relative', className)}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'w-full h-9 px-3 pr-8 rounded-md border border-input bg-background',
          'text-[13px] appearance-none cursor-pointer',
          'focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring',
          'transition-subtle',
          !value && 'text-muted-foreground/60'
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/60 pointer-events-none" />
    </div>
  );
}
