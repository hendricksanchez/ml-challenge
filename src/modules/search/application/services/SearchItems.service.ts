import { ISearchRepository } from "@/modules/search/domain/repositories";

export class SearchItemsService {
  constructor(private readonly repository: ISearchRepository) {}

  async searchItemsByQuery(query: string, offset: number = 0) {
    return this.repository.searchItems(query, offset);
  }
}
