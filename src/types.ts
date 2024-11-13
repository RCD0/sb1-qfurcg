export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'living' | 'dining' | 'bedroom' | 'office';
  materials: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  images: string[];
  inStock: boolean;
  variants: {
    color: string;
    imageUrl: string;
  }[];
}

export interface FilterState {
  category: string | null;
  priceRange: [number, number];
  inStock: boolean;
}