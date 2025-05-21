import { IPaging } from "@/shared/domain/models";

export interface ISearchResult {
  items: ISearchItem[];
  paging: IPaging;
}

export interface ISearchItem {
  id: string;
  title: string;
  seller: string;
  price: {
    currency: string;
    amount: number;
    regularAmount: number;
    discountRate: number;
  };
  installments: {
    quantity: number;
    amount: number;
    rate: number;
    currencyId: string;
  };
  freeShipping: boolean;
  condition: string;
  picture: string;
}
