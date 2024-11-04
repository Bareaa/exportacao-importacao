import React from 'react';
import { Plus, Search, Filter, Ship, FileText, DollarSign } from 'lucide-react';
import type { ImportProcess } from '../types/processes';

const mockProcesses: ImportProcess[] = [
  {
    id: 'IMP001',
    status: 'IN_PROGRESS',
    supplier: 'Global Grains Ltd',
    products: [],
    documents: [
      {
        id: 'DOC001',
        type: 'INVOICE',
        number: 'INV-2024-001',
        issueDate: '2024-03-15',
        status: 'ISSUED',
        url: '#'
      }
    ],
    inspections: [],
    customs: {
      declarationNumber: 'DI-001',
      status: 'PENDING',
      taxes: [],
      documents: []
    },
    financials: {
      totalValue: 500000,
      advancePayment: 150000,
      exchangeRate: 4.95,
      taxes: [],
      expenses: [],
      commitments: [],
      collections: [],
      exchange: []
    },
    shipping: {
      containers: [],
      status: 'SCHEDULED',
      origin: 'Buenos Aires',
      destination: 'Santos',
      estimatedArrival: '2024-04-15',
      documents: []
    },
    siscomex: {
      registrationNumber: 'SIS001',
      status: 'PENDING',
      declarations: [],
      lastUpdate: '2024-03-15'
    },
    siscoserv: {
      registrationNumber: 'SER001',
      status: 'PENDING',
      declarations: [],
      lastUpdate: '2024-03-15'
    },
    events: []
  }
];

export function Processes() {
  const [processes, setProcesses] = React.useState<ImportProcess[]>(mockProcesses);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-100 text-green-800';
      case 'IN_PROGRESS':
        return 'bg-blue-100 text-blue-800';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Processos</h1>
          <p className="text-gray-600 mt-2">Gerencie seus processos de importação e exportação</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Novo Processo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Ship className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="font-semibold">Processos Ativos</h3>
              <p className="text-2xl font-bold">{processes.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-semibold">Documentos Pendentes</h3>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="h-6 w-6 text-yellow-600" />
            <div>
              <h3 className="font-semibold">Valor Total</h3>
              <p className="text-2xl font-bold">R$ 500.000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar processos..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="btn btn-secondary flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Processo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fornecedor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documentos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {processes.map((process) => (
                <tr key={process.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{process.id}</div>
                    <div className="text-sm text-gray-500">
                      {process.shipping.origin} → {process.shipping.destination}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{process.supplier}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(process.status)}`}>
                      {process.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      R$ {process.financials.totalValue.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      USD {(process.financials.totalValue / process.financials.exchangeRate).toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {process.documents.length} documentos
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