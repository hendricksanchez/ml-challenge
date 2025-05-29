import { ISearchResult } from "../models";

export interface ISearchRepository {
  searchItems: (query: string, offset?: number) => Promise<ISearchResult>;
}
