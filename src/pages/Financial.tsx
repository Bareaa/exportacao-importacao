import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, FileText, CreditCard, Wallet } from 'lucide-react';
import type { ExchangeOperation, Collection, Commitment } from '../types/processes';

interface FinancialSummary {
  totalReceivables: number;
  totalPayables: number;
  exchangeOperations: number;
  monthlyRevenue: number;
}

const mockSummary: FinancialSummary = {
  totalReceivables: 750000,
  totalPayables: 500000,
  exchangeOperations: 1250000,
  monthlyRevenue: 250000
};

const mockExchangeOperations: ExchangeOperation[] = [
  {
    id: '1',
    type: 'PURCHASE',
    amount: 100000,
    rate: 4.95,
    date: '2024-03-15',
    status: 'COMPLETED'
  },
  {
    id: '2',
    type: 'SALE',
    amount: 150000,
    rate: 4.97,
    date: '2024-03-16',
    status: 'PENDING'
  }
];

const mockCollections: Collection[] = [
  {
    id: '1',
    invoiceId: 'INV-001',
    amount: 50000,
    dueDate: '2024-04-15',
    status: 'PENDING'
  }
];

const mockCommitments: Commitment[] = [
  {
    id: '1',
    type: 'EXPECTED',
    description: 'Container Payment',
    amount: 25000,
    dueDate: '2024-04-01',
    status: 'PENDING'
  }
];

export function Financial() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Financeiro</h1>
        <p className="text-gray-600 mt-2">Gestão financeira e operações de câmbio</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="font-semibold">A Receber</h3>
              <p className="text-2xl font-bold">R$ {mockSummary.totalReceivables.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Wallet className="h-6 w-6 text-red-600" />
            <div>
              <h3 className="font-semibold">A Pagar</h3>
              <p className="text-2xl font-bold">R$ {mockSummary.totalPayables.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-semibold">Operações de Câmbio</h3>
              <p className="text-2xl font-bold">R$ {mockSummary.exchangeOperations.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-6 w-6 text-yellow-600" />
            <div>
              <h3 className="font-semibold">Receita Mensal</h3>
              <p className="text-2xl font-bold">R$ {mockSummary.monthlyRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold">Operações de Câmbio</h3>
          </div>
          <div className="p-6">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase pb-4">Operação</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase pb-4">Valor</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase pb-4">Taxa</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase pb-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockExchangeOperations.map((op) => (
                  <tr key={op.id} className="hover:bg-gray-50">
                    <td className="py-4">
                      <div className="font-medium text-gray-900">{op.type}</div>
                      <div className="text-sm text-gray-500">{new Date(op.date).toLocaleDateString()}</div>
                    </td>
                    <td className="py-4">USD {op.amount.toLocaleString()}</td>
                    <td className="py-4">R$ {op.rate.toFixed(2)}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        op.status === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {op.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold">Cobranças</h3>
            </div>
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase pb-4">Nota Fiscal</th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase pb-4">Valor</th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase pb-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {mockCollections.map((col) => (
                    <tr key={col.id} className="hover:bg-gray-50">
                      <td className="py-4">
                        <div className="font-medium text-gray-900">{col.invoiceId}</div>
                        <div className="text-sm text-gray-500">Vence: {new Date(col.dueDate).toLocaleDateString()}</div>
                      </td>
                      <td className="py-4">R$ {col.amount.toLocaleString()}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          col.status === 'PAID' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {col.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold">Compromissos</h3>
            </div>
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase pb-4">Descrição</th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase pb-4">Valor</th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase pb-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {mockCommitments.map((com) => (
                    <tr key={com.id} className="hover:bg-gray-50">
                      <td className="py-4">
                        <div className="font-medium text-gray-900">{com.description}</div>
                        <div className="text-sm text-gray-500">Vence: {new Date(com.dueDate).toLocaleDateString()}</div>
                      </td>
                      <td className="py-4">R$ {com.amount.toLocaleString()}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          com.status === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {com.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}