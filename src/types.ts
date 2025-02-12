export type Category = 'Produtividade' | 'Finanças' | 'Saúde' | 'Outros';
export type Complexity = 'Básico' | 'Intermediário' | 'Avançado';

export interface Template {
  id: string;
  title: string;
  description: string;
  category: Category;
  prompt: string;
  complexity: Complexity;
  implementationTime: string;
  usageCount: number;
  rating: number;
  iconUrl: string;
}