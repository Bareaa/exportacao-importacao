import React from 'react';
import { BarChart3, TrendingUp, FileText, Download } from 'lucide-react';

const reportCategories = [
  {
    title: 'Relatórios Financeiros',
    description: 'Visualize desempenho financeiro e análise de custos',
    icon: TrendingUp,
    reports: [
      { name: 'Resumo Financeiro Mensal', date: '2024-03-01' },
      { name: 'Análise de Custos', date: '2024-03-15' },
      { name: 'Detalhamento de Receitas', date: '2024-03-10' }
    ]
  },
  {
    title: 'Relatórios Operacionais',
    description: 'Acompanhe embarques e movimentações de estoque',
    icon: BarChart3,
    reports: [
      { name: 'Status de Embarques', date: '2024-03-14' },
      { name: 'Análise de Movimentação de Estoque', date: '2024-03-13' },
      { name: 'Utilização de Containers', date: '2024-03-12' }
    ]
  }
];

export function Reports() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Relatórios</h1>
        <p className="text-gray-600 mt-2">Acesse e baixe relatórios detalhados</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportCategories.map((category) => (
          <div key={category.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gray-100 rounded-lg">
                <category.icon className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {category.reports.map((report) => (
                <div key={report.name} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">{report.name}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(report.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg" title="Baixar">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}