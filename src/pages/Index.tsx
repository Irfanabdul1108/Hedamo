import { useState, useMemo, useEffect } from 'react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { ProductCardSkeleton } from '@/components/ProductCardSkeleton';
import { EmptyState } from '@/components/EmptyState';
import { SearchInput } from '@/components/SearchInput';
import { FilterSelect } from '@/components/FilterSelect';
import { SortSelect, SortOption } from '@/components/SortSelect';
import { DisclaimerBanner } from '@/components/DisclaimerBanner';
import { mockProducts, categories, ProductStatus } from '@/data/mockProducts';

const statusOptions = [
  { value: 'draft', label: 'Draft' },
  { value: 'submitted', label: 'Submitted' },
  { value: 'published', label: 'Published' },
];

const categoryOptions = categories.map((cat) => ({ value: cat, label: cat }));

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('date-desc');

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...mockProducts];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.producer.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (categoryFilter) {
      products = products.filter((p) => p.category === categoryFilter);
    }

    // Apply status filter
    if (statusFilter) {
      products = products.filter((p) => p.status === statusFilter);
    }

    // Apply sorting
    products.sort((a, b) => {
      switch (sortOption) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'date-asc':
          return new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime();
        case 'date-desc':
        default:
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      }
    });

    return products;
  }, [searchQuery, categoryFilter, statusFilter, sortOption]);

  const hasActiveFilters = searchQuery || categoryFilter || statusFilter;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container">
        <div className="max-w-4xl mx-auto">
          {/* Page Header Section */}
          <section className="pt-10 pb-8 border-b border-border/40">
            <h1 className="text-[22px] font-medium text-foreground tracking-tight leading-tight">
              Product Disclosures
            </h1>
            <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed max-w-lg">
              Browse producer-declared product information and supporting documentation.
            </p>
          </section>

          {/* Disclaimer */}
          <div className="py-6">
            <DisclaimerBanner />
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by name, producer, or category..."
              className="flex-1"
            />
            <div className="flex gap-2">
              <FilterSelect
                value={categoryFilter}
                onChange={setCategoryFilter}
                options={categoryOptions}
                placeholder="All Categories"
                className="w-40"
              />
              <FilterSelect
                value={statusFilter}
                onChange={setStatusFilter}
                options={statusOptions}
                placeholder="All Statuses"
                className="w-32"
              />
            </div>
          </div>

          {/* Sort and Results Count */}
          <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-border/40">
            <p className="text-[12px] text-muted-foreground tracking-wide">
              {isLoading ? (
                <span className="inline-block w-20 h-3 bg-muted rounded animate-pulse" />
              ) : (
                `${filteredAndSortedProducts.length} disclosure${
                  filteredAndSortedProducts.length !== 1 ? 's' : ''
                }`
              )}
            </p>
            <SortSelect
              value={sortOption}
              onChange={setSortOption}
              className="w-44"
            />
          </div>

          {/* Product List */}
          <div className="space-y-3 pb-12">
            {isLoading ? (
              <>
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
              </>
            ) : filteredAndSortedProducts.length > 0 ? (
              filteredAndSortedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <EmptyState
                title={hasActiveFilters ? 'No matching disclosures' : 'No disclosures available'}
                description={
                  hasActiveFilters
                    ? 'Adjust your search or filter criteria.'
                    : 'There are currently no product disclosures in the system.'
                }
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
