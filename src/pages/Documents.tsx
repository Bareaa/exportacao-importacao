import React from 'react';
import { Plus, Search, Filter, FileText, Download, Eye } from 'lucide-react';
import type { DocumentInfo } from '../types/reports';

const mockDocuments: DocumentInfo[] = [
  {
    id: 'DOC001',
    type: 'INVOICE',
    number: 'INV-2024-001',
    issueDate: '2024-03-15',
    status: 'ISSUED',
    url: '#'
  },
  {
    id: 'DOC002',
    type: 'CONTRACT',
    number: 'CTR-2024-001',
    issueDate: '2024-03-14',
    status: 'ISSUED',
    url: '#'
  },
  {
    id: 'DOC003',
    type: 'PROFORMA',
    number: 'PRO-2024-001',
    issueDate: '2024-03-13',
    status: 'DRAFT',
    url: '#'
  }
];

export function Documents() {
  const [documents, setDocuments] = React.useState<DocumentInfo[]>(mockDocuments);
  const [selectedType, setSelectedType] = React.useState<string>('ALL');

  const documentTypes = ['ALL', 'INVOICE', 'CONTRACT', 'PROFORMA', 'INSPECTION', 'CUSTOMS'];

  const filteredDocuments = selectedType === 'ALL' 
    ? documents 
    : documents.filter(doc => doc.type === selectedType);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ISSUED':
        return 'bg-green-100 text-green-800';
      case 'DRAFT':
        return 'bg-yellow-100 text-yellow-800';
      case 'EXPIRED':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Documentos</h1>
          <p className="text-gray-600 mt-2">Gerencie todos os documentos do sistema</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Novo Documento
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <div className="flex gap-4 mb-4">
            {documentTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedType === type
                    ? 'bg-blue-100 text-blue-800'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {type === 'ALL' ? 'Todos' : type}
              </button>
            ))}
          </div>
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar documentos..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="btn btn-secondary flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtros
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documento</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredDocuments.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded">
                        <FileText className="h-5 w-5 text-gray-700" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{doc.number}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{doc.type}</td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(doc.issueDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
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