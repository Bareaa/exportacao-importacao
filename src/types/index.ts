export interface GrainProduct {
  id: string;
  name: string;
  type: string;
  origin: string;
  harvest: string;
  unit: string;
  price: number;
  quantity: number;
  minStock: number;
  location: string;
}

export interface StockMovement {
  id: string;
  productId: string;
  type: 'IN' | 'OUT' | 'TRANSFER';
  quantity: number;
  date: string;
  fromLocation?: string;
  toLocation?: string;
}

export interface DashboardStats {
  totalProducts: number;
  lowStockProducts: number;
  pendingInvoices: number;
  monthlyRevenue: number;
}