import React, { useState } from 'react';
import { templates } from '../data/templates';
import { Category } from '../types';
import CategoryFilter from '../components/CategoryFilter';
import TemplateCard from '../components/TemplateCard';
import SearchBar from '../components/SearchBar';
import QuickGuide from '../components/QuickGuide';

const categories: Category[] = ['Produtividade', 'Finanças', 'Saúde', 'Outros'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTemplates = templates
    .filter(template => {
      const matchesCategory = !selectedCategory || template.category === selectedCategory;
      const matchesSearch = !searchTerm || 
        template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12 animate-fade-in">
        <div className="flex justify-end mb-4">
          <QuickGuide />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Templates para Builders de IA
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Encontre prompts prontos para criar seus aplicativos com IA, sem precisar de conhecimento técnico. 
          Escolha um template, copie e comece a construir.
        </p>
      </div>
      
      <div className="animate-slide-in stagger-delay-1">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      </div>
      
      <div className="animate-slide-in stagger-delay-2">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template, index) => (
          <div
            key={template.id}
            className={`animate-scale-in stagger-delay-${Math.min(index + 1, 3)}`}
          >
            <TemplateCard template={template} />
          </div>
        ))}
      </div>
    </div>
  );
}