import React from 'react';
import { Search } from 'lucide-react';

interface Props {
  searchTerm: string;
  onSearch: (term: string) => void;
}

export default function SearchBar({ searchTerm, onSearch }: Props) {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input
        type="text"
        placeholder="Busque por tipo de app, função ou categoria..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/20 focus:outline-none transition-colors"
      />
    </div>
  );
}