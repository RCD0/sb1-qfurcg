import React from 'react';
import { Product } from '../types';
import { IndianRupee, Package, Ruler } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      onClick={() => onClick(product)}
      className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold px-4 py-2 bg-red-500 rounded-md">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <IndianRupee className="w-4 h-4" />
          <span className="font-medium">₹{product.price.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Package className="w-4 h-4" />
            <span>{product.materials[0]}</span>
          </div>
          <div className="flex items-center gap-1">
            <Ruler className="w-4 h-4" />
            <span>{product.dimensions.width}cm</span>
          </div>
        </div>
      </div>
    </div>
  );
};