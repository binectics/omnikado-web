interface Price {
  min: number;
  max: number;
  currencyCode: string;
}

interface Product {
  price: Price;
  id: number;
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
  modifiedDate: string;
  products: Product[];
  categories: Category[];
}
