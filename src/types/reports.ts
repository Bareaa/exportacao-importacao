export interface FinancialReport {
  id: string;
  period: string;
  expectedCosts: number;
  actualCosts: number;
  variance: number;
  details: CostDetail[];
}

export interface ShipmentReport {
  id: string;
  status: 'IN_TRANSIT' | 'DELIVERED' | 'PENDING';
  containerInfo: ContainerInfo;
  documents: DocumentInfo[];
  tracking: TrackingDetail[];
}

export interface ContainerInfo {
  id: string;
  number: string;
  type: string;
  capacity: number;
  contents: ContainerContent[];
  seals: string[];
  documents: DocumentInfo[];
}

export interface ContainerContent {
  productId: string;
  quantity: number;
  unit: string;
  inspectionStatus: 'PENDING' | 'PASSED' | 'FAILED';
}

export interface DocumentInfo {
  id: string;
  type: 'CONTRACT' | 'INVOICE' | 'PROFORMA' | 'INSPECTION' | 'CUSTOMS';
  number: string;
  issueDate: string;
  expiryDate?: string;
  status: 'DRAFT' | 'ISSUED' | 'EXPIRED' | 'CANCELLED';
  url: string;
}

export interface TrackingDetail {
  timestamp: string;
  location: string;
  status: string;
  notes?: string;
}