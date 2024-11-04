import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Inventory } from './pages/Inventory';
import { Invoices } from './pages/Invoices';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { Processes } from './pages/Processes';
import { Contracts } from './pages/Contracts';
import { Financial } from './pages/Financial';
import { Documents } from './pages/Documents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="processes" element={<Processes />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="contracts" element={<Contracts />} />
          <Route path="financial" element={<Financial />} />
          <Route path="documents" element={<Documents />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;