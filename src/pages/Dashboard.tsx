import React from 'react';
import { StatsCard } from '../components/StatsCard';
import { FinancialSummary } from '../components/reports/FinancialSummary';
import { ProcessTracker } from '../components/processes/ProcessTracker';
import { DocumentList } from '../components/documents/DocumentList';
import { TrendComparison } from '../components/TrendComparison';
import { Wheat, Truck, DollarSign, FileText } from 'lucide-react';
import type { DashboardStats } from '../types';
import type { FinancialReport, DocumentInfo } from '../types/reports';
import type { ImportProcess } from '../types/processes';

export function Dashboard() {
  const stats: DashboardStats = {
    totalProducts: 1234,
    lowStockProducts: 5,
    pendingInvoices: 12,
    monthlyRevenue: 523400
  };

  const monthlyComparison = [
    { month: 'Janeiro', value: 450000, change: 0 },
    { month: 'Fevereiro', value: 485000, change: 7.8 },
    { month: 'Março', value: 523400, change: 7.9 }
  ];

  const financialReport: FinancialReport = {
    id: '2024-Q1',
    period: '1º Trimestre 2024',
    expectedCosts: 1250000,
    actualCosts: 1180000,
    variance: 70000,
    details: []
  };

  const recentDocuments: DocumentInfo[] = [
    {
      id: 'DOC001',
      type: 'NOTA_FISCAL',
      number: 'NF-2024-001',
      issueDate: '2024-03-15',
      status: 'EMITIDA',
      url: '#'
    },
    {
      id: 'DOC002',
      type: 'CONTRATO',
      number: 'CTR-2024-001',
      issueDate: '2024-03-14',
      status: 'EMITIDA',
      url: '#'
    }
  ];

  const activeProcess: ImportProcess = {
    id: 'IMP001',
    status: 'EM_ANDAMENTO',
    supplier: 'Global Grains Ltda',
    products: [],
    documents: recentDocuments,
    inspections: [],
    customs: {
      declarationNumber: 'DEC001',
      status: 'PENDENTE',
      taxes: [],
      documents: []
    },
    financials: {
      totalValue: 500000,
      advancePayment: 150000,
      exchangeRate: 4.95,
      taxes: [],
      expenses: []
    }
  };

  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Painel</h1>
        <p className="text-gray-600 mt-2">Bem-vindo de volta! Aqui está o que está acontecendo hoje.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total de Produtos"
          value={stats.totalProducts}
          icon={Wheat}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Alertas de Estoque Baixo"
          value={stats.lowStockProducts}
          icon={Truck}
          trend={{ value: 2, isPositive: false }}
        />
        <StatsCard
          title="Notas Fiscais Pendentes"
          value={stats.pendingInvoices}
          icon={FileText}
        />
        <StatsCard
          title="Receita Mensal"
          value={`R$ ${(stats.monthlyRevenue / 1000).toFixed(1)}k`}
          icon={DollarSign}
          trend={{ value: 8.2, isPositive: true }}
        />
      </div>

      <div className="mb-8">
        <TrendComparison 
          title="Comparativo de Receita Mensal" 
          data={monthlyComparison} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <FinancialSummary report={financialReport} />
        <ProcessTracker process={activeProcess} />
      </div>

      <DocumentList 
        documents={recentDocuments}
        onView={(doc) => console.log('Visualizar documento:', doc.id)}
        onDownload={(doc) => console.log('Baixar documento:', doc.id)}
      />
    </div>
  );
}