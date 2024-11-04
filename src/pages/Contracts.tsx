import React from 'react';
import { Plus, Search, Filter, FileCheck } from 'lucide-react';

interface Contract {
  id: string;
  number: string;
  type: 'PURCHASE' | 'SALE';
  counterparty: string;
  date: string;
  value: number;
  status: 'DRAFT' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
}

const mockContracts: Contract[] = [
  {
    id: '1',
    number: 'CTR-2024-001',
    type: 'PURCHASE',
    counterparty: 'Global Grains Ltd',
    date: '2024-03-15',
    value: 500000,
    status: 'ACTIVE'
  }
];

export function Contracts() {
  const [contracts, setContracts] = React.useState<Contract[]>(mockContracts);

  const getStatusColor = (status: Contract['status']) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-green-100 text-green-800';
      case 'DRAFT':
        return 'bg-yellow-100 text-yellow-800';
      case 'COMPLETED':
        return 'bg-blue-100 text-blue-800';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contratos</h1>
          <p className="text-gray-600 mt-2">Gerencie seus contratos de compra e venda</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Novo Contrato
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar contratos..."
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contrato</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contraparte</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {contracts.map((contract) => (
                <tr key={contract.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{contract.number}</div>
                    <div className="text-sm text-gray-500">
                      {new Date(contract.date).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      contract.type === 'PURCHASE' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {contract.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{contract.counterparty}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    R$ {contract.value.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(contract.status)}`}>
                      {contract.status}
                    </span>
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