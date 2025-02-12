import { Template } from '../types';

export const templates: Template[] = [
  {
    id: '1',
    title: 'App de Gerenciamento de Tarefas',
    description: 'Template para criar um aplicativo intuitivo de gerenciamento de tarefas diárias, com funcionalidades de organização, filtros e feedback visual.',
    category: 'Produtividade',
    complexity: 'Básico',
    implementationTime: '2 horas',
    usageCount: 245,
    rating: 4.8,
    iconUrl: 'https://api.iconify.design/lucide:check-circle.svg',
    prompt: `Você é um especialista em desenvolvimento de aplicativos de gerenciamento de tarefas.

TÍTULO: App de Gerenciamento de Tarefas
OBJETIVO: Criar um aplicativo simples e intuitivo para gerenciar tarefas diárias

ESTRUTURA DO APP:
Tela Principal:
- Campo de entrada para nova tarefa
- Lista de tarefas pendentes
- Lista de tarefas concluídas
- Botões de ação em cada tarefa

Funcionalidades Essenciais:
- Adicionar novas tarefas com título e descrição opcional
- Marcar tarefas como concluídas
- Excluir tarefas
- Filtrar tarefas por status (pendentes/concluídas)
- Ordenar tarefas por data de criação

Estilo Visual:
- Cores: Roxo principal (#800080) para botões e destaques
- Fundo claro para melhor legibilidade
- Ícones intuitivos para ações principais
- Fonte sans-serif moderna

Experiência do Usuário:
- Animações suaves ao completar tarefas
- Feedback visual ao adicionar/remover itens
- Interface limpa e minimalista`
  },
  {
    id: '2',
    title: 'App de Controle Financeiro',
    description: 'Template para criar um aplicativo completo de controle financeiro pessoal com categorização automática de despesas e visualização em gráficos.',
    category: 'Finanças',
    complexity: 'Intermediário',
    implementationTime: '1 dia',
    usageCount: 189,
    rating: 4.6,
    iconUrl: 'https://api.iconify.design/lucide:bar-chart.svg',
    prompt: `Você é um especialista em desenvolvimento de aplicativos financeiros.

TÍTULO: App de Controle Financeiro
OBJETIVO: Desenvolver uma calculadora de despesas pessoais com categorização automática

ESTRUTURA DO APP:
Página Principal:
- Resumo do saldo atual
- Gráfico de gastos por categoria
- Lista das últimas transações
- Botão de adicionar nova despesa

Funcionalidades Principais:
- Registro de despesas com valor, data e categoria
- Categorização automática de gastos
- Cálculo de totais por período
- Visualização de gastos em gráficos
- Exportação de relatório mensal

Sistema de Categorias:
- Alimentação
- Transporte
- Moradia
- Lazer
- Outros

Interface:
- Dashboard intuitivo
- Gráficos interativos
- Cores distintas para cada categoria
- Feedback visual ao registrar transações`
  },
  {
    id: '3',
    title: 'App de Acompanhamento Fitness',
    description: 'Template para criar um aplicativo completo de monitoramento de atividades físicas, com acompanhamento de progresso e definição de metas personalizadas.',
    category: 'Saúde',
    complexity: 'Avançado',
    implementationTime: '3 dias',
    usageCount: 156,
    rating: 4.9,
    iconUrl: 'https://api.iconify.design/lucide:dumbbell.svg',
    prompt: `TÍTULO: App de Acompanhamento Fitness
OBJETIVO: Criar um aplicativo para monitoramento de atividades físicas e progresso

ESTRUTURA DO APP:
Tela Inicial:
- Resumo diário de atividades
- Progresso das metas semanais
- Lista de exercícios recentes
- Botão de registro rápido

Funcionalidades Essenciais:
- Registro de exercícios com tipo, duração e intensidade
- Acompanhamento de peso e medidas
- Definição de metas personalizadas
- Visualização de progresso em gráficos
- Lembretes de exercício

Tipos de Exercício:
- Cardio (corrida, caminhada, ciclismo)
- Musculação
- Yoga/Alongamento
- Esportes

Visual e Interação:
- Design clean e motivacional
- Gráficos de progresso claros
- Ícones para cada tipo de exercício
- Feedback positivo ao atingir metas`
  }
];