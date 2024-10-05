export interface Cart {
  id: number;
  createdAt: string;
  updatedAt: string;
  sessionID: string;
  status: string;
  cartItems: CartItem[];
}

export interface Order {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  totalAmount: string;
  providerResponse: null;
  items: [];
}

export interface CartItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  sourceCurrency: string;
  sourceAmount: number;
  convertedToCurrency: string;
  convertedToAmount: number;
  conversionRate: number;
  productId: string;
  quantity: number;
  appliedDiscount: number;
  fee: number;
  isDeleted: boolean;
}
