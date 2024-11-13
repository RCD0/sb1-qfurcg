import React from 'react';
import { Product } from '../types';
import { X, Package, Ruler, IndianRupee } from 'lucide-react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = React.useState(product.images[0]);
  const [selectedVariant, setSelectedVariant] = React.useState(product.variants[0]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-6">
          <div>
            <div className="aspect-square rounded-lg overflow-hidden mb-4">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(image)}
                  className={`aspect-square rounded-md overflow-hidden border-2 
                    ${selectedImage === image ? 'border-blue-500' : 'border-transparent'}`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <IndianRupee className="w-6 h-6" />
              <span className="text-3xl font-bold">₹{product.price.toLocaleString()}</span>
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material) => (
                    <span
                      key={material}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Dimensions</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Width</div>
                    <div className="font-medium">{product.dimensions.width}cm</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Height</div>
                    <div className="font-medium">{product.dimensions.height}cm</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Depth</div>
                    <div className="font-medium">{product.dimensions.depth}cm</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Color Variants</h3>
                <div className="flex gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.color}
                      onClick={() => setSelectedVariant(variant)}
                      className={`p-1 rounded-lg border-2 transition-colors
                        ${selectedVariant.color === variant.color 
                          ? 'border-blue-500' 
                          : 'border-transparent'}`}
                    >
                      <img
                        src={variant.imageUrl}
                        alt={variant.color}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div className="text-xs mt-1">{variant.color}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              disabled={!product.inStock}
              className={`w-full mt-8 py-3 px-6 rounded-lg text-white font-medium
                ${product.inStock 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-400 cursor-not-allowed'}`}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};