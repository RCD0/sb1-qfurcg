import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Elegance Sofa Set',
    description: 'Premium teak wood sofa set with plush cushions and traditional Indian craftsmanship',
    price: 85000,
    category: 'living',
    materials: ['Teak Wood', 'Premium Fabric', 'High-Density Foam'],
    dimensions: {
      width: 220,
      height: 85,
      depth: 90
    },
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600',
      'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1600'
    ],
    inStock: true,
    variants: [
      { color: 'Royal Blue', imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800' },
      { color: 'Earthy Brown', imageUrl: 'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=800' }
    ]
  },
  {
    id: '2',
    name: 'Heritage Dining Table',
    description: 'Handcrafted dining table with intricate carving details',
    price: 65000,
    category: 'dining',
    materials: ['Sheesham Wood', 'Glass Top'],
    dimensions: {
      width: 180,
      height: 75,
      depth: 90
    },
    images: [
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1600',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600'
    ],
    inStock: true,
    variants: [
      { color: 'Natural Wood', imageUrl: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800' },
      { color: 'Walnut', imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800' }
    ]
  },
  {
    id: '3',
    name: 'Royal Bed Set',
    description: 'Luxurious king-size bed with matching side tables and premium upholstery',
    price: 120000,
    category: 'bedroom',
    materials: ['Solid Wood', 'Premium Fabric', 'Brass Accents'],
    dimensions: {
      width: 200,
      height: 150,
      depth: 210
    },
    images: [
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1600',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1600'
    ],
    inStock: true,
    variants: [
      { color: 'Cream Gold', imageUrl: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800' },
      { color: 'Royal Grey', imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800' }
    ]
  },
  {
    id: '4',
    name: 'Executive Office Desk',
    description: 'Modern executive desk with built-in storage and cable management',
    price: 45000,
    category: 'office',
    materials: ['Engineered Wood', 'Metal Frame', 'Glass'],
    dimensions: {
      width: 160,
      height: 75,
      depth: 80
    },
    images: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1600',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600'
    ],
    inStock: true,
    variants: [
      { color: 'White Oak', imageUrl: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800' },
      { color: 'Dark Walnut', imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800' }
    ]
  },
  {
    id: '5',
    name: 'Designer Coffee Table',
    description: 'Contemporary coffee table with geometric design and storage shelf',
    price: 28000,
    category: 'living',
    materials: ['Marble Top', 'Metal Frame', 'Tempered Glass'],
    dimensions: {
      width: 120,
      height: 45,
      depth: 60
    },
    images: [
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1600',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1600'
    ],
    inStock: false,
    variants: [
      { color: 'White Marble', imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800' },
      { color: 'Black Marble', imageUrl: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800' }
    ]
  },
  {
    id: '6',
    name: 'Ergonomic Office Chair',
    description: 'Premium ergonomic chair with adjustable lumbar support and breathable mesh',
    price: 32000,
    category: 'office',
    materials: ['Mesh', 'Premium Foam', 'Aluminum Base'],
    dimensions: {
      width: 65,
      height: 120,
      depth: 65
    },
    images: [
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1600',
      'https://images.unsplash.com/photo-1589384267710-7a25bc5ab784?auto=format&fit=crop&w=1600'
    ],
    inStock: true,
    variants: [
      { color: 'Black', imageUrl: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=800' },
      { color: 'Grey', imageUrl: 'https://images.unsplash.com/photo-1589384267710-7a25bc5ab784?auto=format&fit=crop&w=800' }
    ]
  },
  {
    id: '7',
    name: 'Modern Wardrobe',
    description: 'Spacious sliding door wardrobe with mirror and LED lighting',
    price: 75000,
    category: 'bedroom',
    materials: ['Premium MDF', 'Tempered Glass', 'LED Lighting'],
    dimensions: {
      width: 200,
      height: 220,
      depth: 65
    },
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1600',
      'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?auto=format&fit=crop&w=1600'
    ],
    inStock: true,
    variants: [
      { color: 'White Oak', imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800' },
      { color: 'Dark Walnut', imageUrl: 'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?auto=format&fit=crop&w=800' }
    ]
  }
];