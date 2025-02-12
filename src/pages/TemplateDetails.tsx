import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, CheckCircle } from 'lucide-react';
import { templates } from '../data/templates';

export default function TemplateDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const template = templates.find(t => t.id === id);

  if (!template) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        <p>Template não encontrado.</p>
      </div>
    );
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(template.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 animate-slide-in"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Voltar
      </button>

      <div className="bg-white rounded-lg shadow-md p-6 animate-scale-in">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">{template.title}</h1>
          <span className="px-3 py-1 text-sm rounded-full bg-[#800080]/10 text-[#800080]">
            {template.category}
          </span>
        </div>

        <p className="text-gray-600 mb-8">{template.description}</p>

        <div className="bg-gray-50 rounded-lg p-6 mb-6 animate-fade-in stagger-delay-1">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Prompt</h2>
          <pre className="whitespace-pre-wrap text-gray-700 font-mono text-sm bg-white p-4 rounded border">
            {template.prompt}
          </pre>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center justify-center w-full px-4 py-2 bg-[#800080] text-white rounded-md hover:bg-[#800080]/90 transition-all duration-300 hover:shadow-md animate-fade-in stagger-delay-2"
        >
          {copied ? (
            <>
              <CheckCircle className="h-5 w-5 mr-2" />
              Copiado!
            </>
          ) : (
            <>
              <Copy className="h-5 w-5 mr-2" />
              Copiar Prompt
            </>
          )}
        </button>
      </div>
    </div>
  );
}