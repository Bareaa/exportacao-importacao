import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';
import type { DocumentInfo } from '../../types/reports';

interface DocumentListProps {
  documents: DocumentInfo[];
  onView?: (doc: DocumentInfo) => void;
  onDownload?: (doc: DocumentInfo) => void;
}

export function DocumentList({ documents, onView, onDownload }: DocumentListProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold">Documents</h3>
      </div>
      
      <div className="divide-y divide-gray-100">
        {documents.map((doc) => (
          <div key={doc.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded">
                <FileText className="h-5 w-5 text-gray-700" />
              </div>
              <div>
                <p className="font-medium">{doc.type}</p>
                <p className="text-sm text-gray-500">
                  {doc.number} • {new Date(doc.issueDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            
            <div className="flex gap-2">
              {onView && (
                <button 
                  onClick={() => onView(doc)}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                >
                  <Eye className="h-5 w-5" />
                </button>
              )}
              {onDownload && (
                <button 
                  onClick={() => onDownload(doc)}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                >
                  <Download className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}