import React from 'react';
import { Link } from 'react-router-dom';
import { Template } from '../types';
import { Clock, Star, Users } from 'lucide-react';

interface Props {
  template: Template;
}

const getComplexityColor = (complexity: Template['complexity']) => {
  switch (complexity) {
    case 'Básico':
      return 'bg-green-100 text-green-800';
    case 'Intermediário':
      return 'bg-yellow-100 text-yellow-800';
    case 'Avançado':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function TemplateCard({ template }: Props) {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-2px] hover:bg-gray-50 h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#800080]/10 transition-colors group-hover:bg-[#800080]/20">
              <img
                src={template.iconUrl}
                alt=""
                className="w-6 h-6 text-[#800080] transition-transform group-hover:scale-110"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-[#800080]">
                {template.title}
              </h3>
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-[#800080]/10 text-[#800080] mt-1 transition-colors group-hover:bg-[#800080]/20">
                {template.category}
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2 transition-colors group-hover:text-gray-900">
          {template.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`px-2 py-1 rounded-md text-xs font-medium transition-colors ${getComplexityColor(template.complexity)}`}>
            {template.complexity}
          </span>
          <span className="flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 transition-colors group-hover:bg-gray-200">
            <Clock className="w-3 h-3 mr-1" />
            {template.implementationTime}
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current transition-transform group-hover:scale-110" />
            <span className="text-sm text-gray-600">{template.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4 text-gray-400 transition-transform group-hover:scale-110" />
            <span className="text-sm text-gray-600">{template.usageCount} usos</span>
          </div>
        </div>

        <div className="mt-auto">
          <Link
            to={`/template/${template.id}`}
            className="inline-block w-full px-4 py-2 bg-[#800080] text-white rounded-md transition-all duration-300 hover:bg-[#800080]/90 hover:shadow-md text-center"
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}