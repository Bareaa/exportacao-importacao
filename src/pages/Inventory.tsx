import React from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { AddProductModal } from '../components/products/AddProductModal';
import type { GrainProduct } from '../types';

export function Inventory() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [products, setProducts] = React.useState<GrainProduct[]>([
    {
      id: '1',
      name: 'Soja Orgânica',
      type: 'Soja',
      origin: 'Brasil',
      harvest: '2024-02',
      unit: 'Ton',
      price: 520,
      quantity: 1500,
      minStock: 500,
      location: 'Armazém A'
    },
    {
      id: '2',
      name: 'Trigo Premium',
      type: 'Trigo',
      origin: 'Argentina',
      harvest: '2024-01',
      unit: 'Ton',
      price: 380,
      quantity: 2200,
      minStock: 800,
      location: 'Armazém B'
    }
  ]);

  const handleAddProduct = (newProduct: Omit<GrainProduct, 'id'>) => {
    const product: GrainProduct = {
      ...newProduct,
      id: (products.length + 1).toString()
    };
    setProducts(prev => [...prev, product]);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Estoque</h1>
          <p className="text-gray-600 mt-2">Gerencie seus produtos e níveis de estoque</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Adicionar Produto
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar produtos..."
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Origem</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preço</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Local</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-500">Safra: {product.harvest}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{product.type}</td>
                  <td className="px-6 py-4 text-gray-500">{product.origin}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{product.quantity} {product.unit}</div>
                    <div className="text-sm text-gray-500">Mín: {product.minStock}</div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">R$ {product.price}</td>
                  <td className="px-6 py-4 text-gray-500">{product.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddProduct}
      />
    </div>
  );
}