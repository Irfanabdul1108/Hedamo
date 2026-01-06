export type ProductStatus = 'draft' | 'submitted' | 'published';

export interface ProductVersion {
  version: string;
  date: string;
  status: ProductStatus;
  changesDescription: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  producer: string;
  status: ProductStatus;
  lastUpdated: string;
  dateCreated: string;
  description: string;
  materials: string[];
  manufacturingProcess: string;
  environmentalClaims: string[];
  hasEvidence: boolean;
  evidenceDescription?: string;
  versions: ProductVersion[];
}

export const categories = [
  'Textiles & Apparel',
  'Electronics',
  'Food & Beverage',
  'Construction Materials',
  'Packaging',
  'Chemicals',
  'Consumer Goods',
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Cotton T-Shirt Model A',
    category: 'Textiles & Apparel',
    producer: 'Nordic Textile Co.',
    status: 'published',
    lastUpdated: '2024-12-18',
    dateCreated: '2024-06-15',
    description: 'Producer-declared organic cotton garment with natural dye process.',
    materials: ['100% Organic Cotton', 'Natural Plant-Based Dyes', 'Recycled Polyester Thread'],
    manufacturingProcess: 'Cut and sew production in certified facility. Producer reports water recycling system in use. Declared energy source: 80% renewable grid mix.',
    environmentalClaims: [
      'Producer declares organic cotton sourcing',
      'Producer reports reduced water usage in dyeing',
      'Producer states packaging is recyclable',
    ],
    hasEvidence: true,
    evidenceDescription: 'Producer has attached supplier certificates and internal audit reports.',
    versions: [
      { version: '1.2', date: '2024-12-18', status: 'published', changesDescription: 'Updated materials composition declaration' },
      { version: '1.1', date: '2024-09-10', status: 'published', changesDescription: 'Added environmental claims section' },
      { version: '1.0', date: '2024-06-15', status: 'submitted', changesDescription: 'Initial disclosure submission' },
    ],
  },
  {
    id: '2',
    name: 'Recycled Aluminum Enclosure',
    category: 'Electronics',
    producer: 'TechMetal Industries',
    status: 'published',
    lastUpdated: '2024-11-22',
    dateCreated: '2024-03-08',
    description: 'Electronics enclosure declared to contain recycled aluminum content.',
    materials: ['Recycled Aluminum (declared 75%)', 'Powder Coating', 'Stainless Steel Fasteners'],
    manufacturingProcess: 'Die-cast aluminum forming. Producer reports use of closed-loop water cooling. Surface treatment in dedicated facility.',
    environmentalClaims: [
      'Producer declares 75% post-consumer recycled content',
      'Producer reports zero liquid discharge from facility',
    ],
    hasEvidence: true,
    evidenceDescription: 'Producer has attached material traceability documents.',
    versions: [
      { version: '2.0', date: '2024-11-22', status: 'published', changesDescription: 'Updated recycled content percentage' },
      { version: '1.0', date: '2024-03-08', status: 'published', changesDescription: 'Initial product disclosure' },
    ],
  },
  {
    id: '3',
    name: 'Plant-Based Food Container',
    category: 'Packaging',
    producer: 'EcoPack Solutions',
    status: 'submitted',
    lastUpdated: '2024-12-28',
    dateCreated: '2024-12-20',
    description: 'Food-grade container declared to be made from plant-based materials.',
    materials: ['PLA (Polylactic Acid)', 'Sugarcane Bagasse', 'Natural Binders'],
    manufacturingProcess: 'Thermoforming process. Producer declares use of agricultural waste feedstock. Production location: Southeast Asia.',
    environmentalClaims: [
      'Producer declares compostable under industrial conditions',
      'Producer states bio-based content exceeds 90%',
    ],
    hasEvidence: false,
    versions: [
      { version: '1.0', date: '2024-12-28', status: 'submitted', changesDescription: 'Initial submission pending review' },
    ],
  },
  {
    id: '4',
    name: 'Low-VOC Interior Paint',
    category: 'Chemicals',
    producer: 'CleanCoat Ltd.',
    status: 'draft',
    lastUpdated: '2024-12-30',
    dateCreated: '2024-12-30',
    description: 'Interior wall paint with producer-declared low volatile organic compound content.',
    materials: ['Acrylic Polymer Base', 'Mineral Pigments', 'Water'],
    manufacturingProcess: 'Water-based formulation and blending. Producer reports dedicated low-emission production line.',
    environmentalClaims: [
      'Producer declares VOC content below 50 g/L',
      'Producer states no added formaldehyde',
    ],
    hasEvidence: false,
    versions: [
      { version: '0.1', date: '2024-12-30', status: 'draft', changesDescription: 'Draft disclosure in preparation' },
    ],
  },
  {
    id: '5',
    name: 'Bamboo Flooring Planks',
    category: 'Construction Materials',
    producer: 'Sustainable Floors Inc.',
    status: 'published',
    lastUpdated: '2024-10-15',
    dateCreated: '2024-02-20',
    description: 'Engineered bamboo flooring with producer-declared sustainable sourcing.',
    materials: ['Strand-Woven Bamboo', 'Eucalyptus Core', 'Water-Based Adhesive'],
    manufacturingProcess: 'Pressure treatment and lamination. Producer declares bamboo sourced from managed plantations. Finishing with UV-cured coating.',
    environmentalClaims: [
      'Producer declares bamboo from 5-year rotation cycle',
      'Producer reports low-emission adhesive system',
      'Producer states packaging contains recycled cardboard',
    ],
    hasEvidence: true,
    evidenceDescription: 'Producer has attached plantation management documentation and emissions test results.',
    versions: [
      { version: '3.1', date: '2024-10-15', status: 'published', changesDescription: 'Updated plantation sourcing information' },
      { version: '3.0', date: '2024-07-01', status: 'published', changesDescription: 'Added emissions testing evidence' },
      { version: '2.0', date: '2024-04-12', status: 'published', changesDescription: 'Revised manufacturing process disclosure' },
    ],
  },
  {
    id: '6',
    name: 'Reusable Glass Water Bottle',
    category: 'Consumer Goods',
    producer: 'ClearWater Vessels',
    status: 'published',
    lastUpdated: '2024-11-05',
    dateCreated: '2024-05-18',
    description: 'Borosilicate glass bottle with silicone sleeve, declared for reuse.',
    materials: ['Borosilicate Glass', 'Food-Grade Silicone', 'Stainless Steel Cap'],
    manufacturingProcess: 'Glass blowing and annealing. Producer reports use of recycled cullet in production batch.',
    environmentalClaims: [
      'Producer declares product designed for 5+ years of use',
      'Producer states glass contains recycled content',
    ],
    hasEvidence: true,
    evidenceDescription: 'Producer has attached product durability test summary.',
    versions: [
      { version: '1.1', date: '2024-11-05', status: 'published', changesDescription: 'Added durability claims and evidence' },
      { version: '1.0', date: '2024-05-18', status: 'published', changesDescription: 'Initial product disclosure' },
    ],
  },
];
