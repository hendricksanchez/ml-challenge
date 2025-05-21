import { ISearchRepository } from "@/modules/search/domain/repositories";
import { ISearchResult } from "@/modules/search/domain/models";

export class SearchItemsByQueryUseCase {
  constructor(private repository: ISearchRepository) {}

  async execute(query: string, offset?: number): Promise<ISearchResult> {
    return await this.repository.searchItems(query, offset);
  }
}
