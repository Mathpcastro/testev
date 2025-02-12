import React from 'react';
import { Category } from '../types';

interface Props {
  categories: Category[];
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${!selectedCategory 
            ? 'bg-[#800080] text-white' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedCategory === category
              ? 'bg-[#800080] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}