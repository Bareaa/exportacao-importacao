export interface ImportProcess {
  id: string;
  status: ProcessStatus;
  supplier: string;
  products: ProcessProduct[];
  documents: DocumentInfo[];
  inspections: InspectionRecord[];
  customs: CustomsInfo;
  financials: ProcessFinancials;
  shipping: ShippingInfo;
  siscomex: SiscomexInfo;
  siscoserv: SiscoservInfo;
  events: AccountingEvent[];
}

export type ProcessStatus = 
  | 'DRAFT'
  | 'PENDING_APPROVAL'
  | 'APPROVED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CANCELLED';

export interface ProcessProduct {
  productId: string;
  quantity: number;
  price: number;
  inspectionRequired: boolean;
  customsInfo: {
    ncm: string;
    taxes: TaxInfo[];
  };
}

export interface InspectionRecord {
  id: string;
  date: string;
  location: string;
  inspector: string;
  status: 'PENDING' | 'PASSED' | 'FAILED';
  findings: string[];
  documents: DocumentInfo[];
}

export interface CustomsInfo {
  declarationNumber: string;
  status: 'PENDING' | 'CLEARED' | 'HELD';
  taxes: TaxInfo[];
  documents: DocumentInfo[];
}

export interface TaxInfo {
  type: string;
  rate: number;
  amount: number;
  paid: boolean;
  dueDate: string;
}

export interface ProcessFinancials {
  totalValue: number;
  advancePayment: number;
  exchangeRate: number;
  taxes: TaxInfo[];
  expenses: Expense[];
  commitments: Commitment[];
  collections: Collection[];
  exchange: ExchangeOperation[];
}

export interface ShippingInfo {
  containers: ContainerInfo[];
  status: 'SCHEDULED' | 'IN_TRANSIT' | 'DELIVERED';
  origin: string;
  destination: string;
  estimatedArrival: string;
  actualArrival?: string;
  documents: DocumentInfo[];
}

export interface SiscomexInfo {
  registrationNumber: string;
  status: string;
  declarations: CustomsDeclaration[];
  lastUpdate: string;
}

export interface SiscoservInfo {
  registrationNumber: string;
  status: string;
  declarations: ServiceDeclaration[];
  lastUpdate: string;
}

export interface CustomsDeclaration {
  id: string;
  type: string;
  date: string;
  status: string;
}

export interface ServiceDeclaration {
  id: string;
  type: string;
  date: string;
  status: string;
}

export interface AccountingEvent {
  id: string;
  date: string;
  type: string;
  description: string;
  amount: number;
  status: string;
}

export interface Commitment {
  id: string;
  type: 'EXPECTED' | 'EFFECTIVE';
  description: string;
  amount: number;
  dueDate: string;
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
}

export interface Collection {
  id: string;
  invoiceId: string;
  amount: number;
  dueDate: string;
  status: 'PENDING' | 'PAID' | 'OVERDUE';
}

export interface ExchangeOperation {
  id: string;
  type: 'PURCHASE' | 'SALE';
  amount: number;
  rate: number;
  date: string;
  status: 'PENDING' | 'COMPLETED';
}

export interface Expense {
  id: string;
  type: 'EXPECTED' | 'EFFECTIVE';
  category: string;
  description: string;
  amount: number;
  date: string;
}

export interface ContainerInfo {
  id: string;
  number: string;
  type: string;
  capacity: number;
  contents: ContainerContent[];
  seals: string[];
  documents: DocumentInfo[];
  status: 'LOADING' | 'IN_TRANSIT' | 'UNLOADING' | 'COMPLETED';
}

export interface ContainerContent {
  productId: string;
  quantity: number;
  unit: string;
  inspectionStatus: 'PENDING' | 'PASSED' | 'FAILED';
}