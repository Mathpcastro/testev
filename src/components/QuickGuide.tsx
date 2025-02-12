import React, { useState } from 'react';
import { HelpCircle, X } from 'lucide-react';

export default function QuickGuide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-[#800080] hover:text-[#800080]/80 transition-colors"
      >
        <HelpCircle className="h-5 w-5" />
        <span>Como Usar</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-6 z-10">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Guia Rápido</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-[#800080] text-white rounded-full flex items-center justify-center text-sm font-medium">
                1
              </span>
              <p className="ml-3 text-gray-600">
                Escolha um template que se aproxime do app que você quer criar
              </p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-[#800080] text-white rounded-full flex items-center justify-center text-sm font-medium">
                2
              </span>
              <p className="ml-3 text-gray-600">
                Na página do template, copie o prompt completo
              </p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-[#800080] text-white rounded-full flex items-center justify-center text-sm font-medium">
                3
              </span>
              <p className="ml-3 text-gray-600">
                Cole o prompt no seu builder de IA favorito e personalize conforme necessário
              </p>
            </li>
          </ol>
        </div>
      )}
    </div>
  );
}