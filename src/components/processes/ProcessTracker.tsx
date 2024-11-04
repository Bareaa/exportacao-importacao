import React from 'react';
import { CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import type { ImportProcess } from '../../types/processes';

interface ProcessTrackerProps {
  process: ImportProcess;
}

export function ProcessTracker({ process }: ProcessTrackerProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case 'IN_PROGRESS':
        return <Clock className="h-5 w-5 text-blue-600" />;
      case 'CANCELLED':
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

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
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Process #{process.id}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(process.status)}`}>
          {process.status.replace('_', ' ')}
        </span>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Supplier</p>
            <p className="font-medium">{process.supplier}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Products</p>
            <p className="font-medium">{process.products.length} items</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-3">Process Timeline</h4>
          <div className="space-y-4">
            {process.documents.map((doc) => (
              <div key={doc.id} className="flex items-center gap-3">
                {getStatusIcon(doc.status)}
                <div>
                  <p className="font-medium">{doc.type}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(doc.issueDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}