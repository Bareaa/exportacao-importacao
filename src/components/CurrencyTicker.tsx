import React, { useEffect } from 'react';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

interface Currency {
  code: string;
  name: string;
  rate: number;
  trend: number;
}

export function CurrencyTicker() {
  const [currencies, setCurrencies] = React.useState<Currency[]>([
    { code: 'USD', name: 'Dólar Comercial', rate: 4.95, trend: 0.15 },
    { code: 'EUR', name: 'Euro', rate: 5.35, trend: -0.22 },
    { code: 'GBP', name: 'Libra Esterlina', rate: 6.25, trend: 0.08 }
  ]);
  const [lastUpdate, setLastUpdate] = React.useState(new Date());

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrencies(prev => prev.map(currency => ({
        ...currency,
        rate: currency.rate + (Math.random() - 0.5) * 0.02,
        trend: (Math.random() - 0.5) * 0.5
      })));
      setLastUpdate(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          {currencies.map(currency => (
            <div key={currency.code} className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                <span className="font-medium">{currency.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">R$ {currency.rate.toFixed(2)}</span>
                <span className={`flex items-center gap-1 text-xs ${currency.trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {currency.trend >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {currency.trend >= 0 ? '+' : ''}{currency.trend.toFixed(2)}%
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-gray-400 text-xs">
          Atualizado: {lastUpdate.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}