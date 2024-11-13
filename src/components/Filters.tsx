import React from 'react';
import { FilterState } from '../types';
import { Filter } from 'lucide-react';

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange }) => {
  const categories = ['living', 'dining', 'bedroom', 'office'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">Category</h3>
          <div className="space-y-2">
            <button
              onClick={() => onFilterChange({ ...filters, category: null })}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors
                ${!filters.category ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onFilterChange({ ...filters, category })}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors
                  ${filters.category === category ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="200000"
              step="10000"
              value={filters.priceRange[1]}
              onChange={(e) => onFilterChange({
                ...filters,
                priceRange: [0, parseInt(e.target.value)]
              })}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹0</span>
              <span>Up to ₹{filters.priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.inStock}
              onChange={(e) => onFilterChange({
                ...filters,
                inStock: e.target.checked
              })}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span>In Stock Only</span>
          </label>
        </div>
      </div>
    </div>
  );
};