import React from 'react';
import { User, Building2, Bell, Shield, Globe } from 'lucide-react';

const settingsSections = [
  {
    title: 'Configurações de Perfil',
    icon: User,
    description: 'Gerencie suas informações de conta e preferências',
    path: '/settings/profile'
  },
  {
    title: 'Informações da Empresa',
    icon: Building2,
    description: 'Atualize os dados e informações comerciais da empresa',
    path: '/settings/company'
  },
  {
    title: 'Notificações',
    icon: Bell,
    description: 'Configure suas preferências de notificação',
    path: '/settings/notifications'
  },
  {
    title: 'Segurança',
    icon: Shield,
    description: 'Gerencie configurações de segurança e permissões',
    path: '/settings/security'
  },
  {
    title: 'Configurações Regionais',
    icon: Globe,
    description: 'Configure fuso horário e preferências de localização',
    path: '/settings/regional'
  }
];

export function Settings() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>
        <p className="text-gray-600 mt-2">Gerencie sua conta e preferências do sistema</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section) => (
          <div
            key={section.title}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <section.icon className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <p className="text-gray-600 mt-1">{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}