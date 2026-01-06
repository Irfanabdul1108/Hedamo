import { cn } from '@/lib/utils';

interface ProductCardSkeletonProps {
  className?: string;
}

export function ProductCardSkeleton({ className }: ProductCardSkeletonProps) {
  return (
    <div
      className={cn(
        'bg-card border border-border rounded-lg',
        className
      )}
    >
      <div className="px-6 py-5">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1 min-w-0 space-y-3">
            {/* Product name skeleton */}
            <div className="h-5 w-64 bg-muted rounded animate-pulse" />

            {/* Category + Producer skeleton */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-24 bg-muted rounded animate-pulse" />
              <div className="h-4 w-1 bg-muted rounded animate-pulse" />
              <div className="h-4 w-36 bg-muted rounded animate-pulse" />
            </div>

            {/* Status + Timestamp skeleton */}
            <div className="flex items-center gap-3">
              <div className="h-5 w-16 bg-muted rounded animate-pulse" />
              <div className="h-3 w-24 bg-muted rounded animate-pulse" />
            </div>
          </div>

          <div className="flex-shrink-0 self-center">
            <div className="w-5 h-5 bg-muted rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
