import React from 'react';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import type { FinancialReport } from '../../types/reports';

interface FinancialSummaryProps {
  report: FinancialReport;
}

export function FinancialSummary({ report }: FinancialSummaryProps) {
  const variance = report.actualCosts - report.expectedCosts;
  const variancePercentage = (variance / report.expectedCosts) * 100;
  const isPositive = variance < 0;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Financial Summary</h3>
        <span className="text-sm text-gray-500">{report.period}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <p className="text-sm text-gray-600">Expected Costs</p>
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-gray-700 mr-1" />
            <span className="text-xl font-semibold">
              ${report.expectedCosts.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-600">Actual Costs</p>
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-gray-700 mr-1" />
            <span className="text-xl font-semibold">
              ${report.actualCosts.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-600">Variance</p>
          <div className="flex items-center">
            {isPositive ? (
              <TrendingDown className="h-5 w-5 text-green-600 mr-1" />
            ) : (
              <TrendingUp className="h-5 w-5 text-red-600 mr-1" />
            )}
            <span className={`text-xl font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? '-' : '+'}${Math.abs(variance).toLocaleString()} 
              ({Math.abs(variancePercentage).toFixed(1)}%)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}