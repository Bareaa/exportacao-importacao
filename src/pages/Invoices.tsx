import React from 'react';
import { FileText, Download, Eye, Plus, Search } from 'lucide-react';

interface Invoice {
  id: string;
  number: string;
  date: string;
  customer: string;
  amount: number;
  status: 'PAGA' | 'PENDENTE' | 'ATRASADA';
}

export function Invoices() {
  const invoices: Invoice[] = [
    {
      id: '1',
      number: 'NF-2024-001',
      date: '2024-03-15',
      customer: 'Global Foods Ltda.',
      amount: 125000,
      status: 'PAGA'
    },
    {
      id: '2',
      number: 'NF-2024-002',
      date: '2024-03-14',
      customer: 'Agri Traders Ltda.',
      amount: 85000,
      status: 'PENDENTE'
    }
  ];

  const getStatusColor = (status: Invoice['status']) => {
    switch (status) {
      case 'PAGA':
        return 'bg-green-100 text-green-800';
      case 'PENDENTE':
        return 'bg-yellow-100 text-yellow-800';
      case 'ATRASADA':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notas Fiscais</h1>
          <p className="text-gray-600 mt-2">Gerencie suas notas fiscais e pagamentos</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Nova Nota Fiscal
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar notas fiscais..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nota Fiscal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{invoice.number}</div>
                      <div className="text-sm text-gray-500">{new Date(invoice.date).toLocaleDateString()}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{invoice.customer}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">R$ {invoice.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg" title="Visualizar">
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg" title="Baixar">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}