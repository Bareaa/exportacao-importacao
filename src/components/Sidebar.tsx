import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Wheat, 
  FileText, 
  BarChart3, 
  Settings,
  Ship,
  FileCheck,
  DollarSign,
  FileSearch,
  LogOut 
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Painel', path: '/dashboard' },
  { icon: Wheat, label: 'Estoque', path: '/inventory' },
  { icon: Ship, label: 'Processos', path: '/processes' },
  { icon: FileText, label: 'Notas Fiscais', path: '/invoices' },
  { icon: FileCheck, label: 'Contratos', path: '/contracts' },
  { icon: DollarSign, label: 'Financeiro', path: '/financial' },
  { icon: FileSearch, label: 'Documentos', path: '/documents' },
  { icon: BarChart3, label: 'Relatórios', path: '/reports' },
  { icon: Settings, label: 'Configurações', path: '/settings' },
];

export function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Wheat className="h-8 w-8" />
          <span>SGIG</span>
        </h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors w-full">
          <LogOut className="h-5 w-5" />
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
}