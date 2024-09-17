interface Price {
  min: number;
  max: number;
  currencyCode: string;
}

export interface Product {
  price: Price;
  id: string;
  name: string;
  minFaceValue: number;
  maxFaceValue: number;
  count: number;
  modifiedDate: string;
}

interface Category {
  id: number;
  name: string;
  description: string | null;
}

export interface Service {
  _id: string;
  name: string;
  countryCode: string;
  currencyCode: string;
  description: string;
  disclaimer: string | null;
  redemptionInstructions: string;
  terms: string;
  logoUrl: string;
  products: Product[];
  categories: Category[];
}
