import React from 'react';
import { ArrowUpRight, ArrowDownRight, ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';

interface MonthlyData {
  month: string;
  value: number;
  change: number;
}

interface TrendComparisonProps {
  data: MonthlyData[];
  title: string;
}

export function TrendComparison({ data, title }: TrendComparisonProps) {
  const getArrow = (change: number) => {
    if (change > 0) return <ArrowUpRight className="h-8 w-8 text-green-500" />;
    if (change < 0) return <ArrowDownRight className="h-8 w-8 text-red-500" />;
    return <ArrowRight className="h-8 w-8 text-gray-500" />;
  };

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-500" />;
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={item.month} className="text-center">
            <div className="mb-2">
              <p className="text-sm text-gray-600">{item.month}</p>
              <p className="text-xl font-semibold">R$ {item.value.toLocaleString()}</p>
            </div>
            {index < data.length - 1 && (
              <div className="flex justify-center items-center">
                {getArrow(item.change)}
              </div>
            )}
            {item.change !== 0 && (
              <div className="flex items-center justify-center gap-1 mt-2">
                {getTrendIcon(item.change)}
                <span className={`text-sm font-medium ${item.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {item.change > 0 ? '+' : ''}{item.change}%
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}