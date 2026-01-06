import { Link } from 'react-router-dom';
import { Product } from '@/data/mockProducts';
import { StatusBadge } from './StatusBadge';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        'group block bg-card border border-border rounded-lg',
        'transition-subtle',
        'hover:bg-accent/40 hover:border-border',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className
      )}
    >
      <div className="px-6 py-5">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1 min-w-0 space-y-3">
            {/* Primary: Product Name */}
            <h3 className="text-base font-semibold text-foreground leading-tight group-hover:text-primary transition-subtle">
              {product.name}
            </h3>

            {/* Secondary: Category + Producer */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{product.category}</span>
              <span className="text-border">·</span>
              <span>Declared by {product.producer}</span>
            </div>

            {/* Tertiary: Status + Timestamp */}
            <div className="flex items-center gap-3">
              <StatusBadge status={product.status} />
              <span className="text-xs text-muted-foreground/70">
                Updated {new Date(product.lastUpdated).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>

          <div className="flex-shrink-0 self-center">
            <ChevronRight 
              className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-150" 
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
