import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { Header } from '@/components/Header';
import { StatusBadge } from '@/components/StatusBadge';
import { DisclaimerBanner } from '@/components/DisclaimerBanner';
import { DisclosureSection } from '@/components/DisclosureSection';
import { DisclosureSummary } from '@/components/DisclosureSummary';
import { VersionHistory } from '@/components/VersionHistory';
import { mockProducts } from '@/data/mockProducts';
import { useState, useEffect } from 'react';

function DetailSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-6 w-48 bg-muted rounded mb-4" />
      <div className="h-8 w-96 bg-muted rounded mb-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 bg-muted rounded-lg" />
        ))}
      </div>

      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            <div className="h-5 w-32 bg-muted rounded" />
            <div className="h-24 bg-muted rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);

  const product = mockProducts.find((p) => p.id === id);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]);

  if (!product && !isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-8">
          <div className="max-w-3xl mx-auto text-center py-16">
            <h1 className="text-xl font-semibold text-foreground mb-2">
              Product Not Found
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              The requested product disclosure could not be found.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to product list
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-subtle mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to product list
          </Link>

          {isLoading ? (
            <DetailSkeleton />
          ) : product ? (
            <div className="animate-fade-in">
              {/* Header Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <StatusBadge status={product.status} />
                  <span className="text-sm text-muted-foreground">
                    {product.category}
                  </span>
                </div>

                <h1 className="text-2xl font-semibold text-foreground mb-2">
                  {product.name}
                </h1>

                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>

              {/* Disclosure Summary - Dedicated Component */}
              <DisclosureSummary
                producer={product.producer}
                dateCreated={product.dateCreated}
                hasEvidence={product.hasEvidence}
                className="mb-8"
              />

              {/* Disclaimer */}
              <DisclaimerBanner className="mb-8" />

              {/* Disclosure Content */}
              <div className="space-y-8">
                <DisclosureSection title="Materials & Composition">
                  <ul className="space-y-2">
                    {product.materials.map((material, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-disclosure-muted mt-2 flex-shrink-0" />
                        <span>{material}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    Information provided by producer.
                  </p>
                </DisclosureSection>

                <DisclosureSection title="Manufacturing Process">
                  <p>{product.manufacturingProcess}</p>
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    Producer-reported process description.
                  </p>
                </DisclosureSection>

                <DisclosureSection title="Environmental or Process Claims">
                  <ul className="space-y-2">
                    {product.environmentalClaims.map((claim, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-disclosure-muted mt-2 flex-shrink-0" />
                        <span>{claim}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    Claims are declared by producer. Hedamo does not verify accuracy.
                  </p>
                </DisclosureSection>

                {product.hasEvidence && product.evidenceDescription && (
                  <DisclosureSection title="Supporting Evidence">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border">
                      <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-foreground mb-1">
                          {product.evidenceDescription}
                        </p>
                        <p className="text-xs text-muted-foreground italic">
                          Evidence is attached by producer and has not been reviewed by Hedamo.
                        </p>
                      </div>
                    </div>
                  </DisclosureSection>
                )}

                <VersionHistory versions={product.versions} />
              </div>

              {/* Final Disclaimer */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  This page presents producer-declared information. It is not certification or verification. 
                  All data and claims are the responsibility of the declaring producer.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
