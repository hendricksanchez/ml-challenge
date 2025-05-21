import { ISearchRepository } from "@/modules/search/domain/repositories";
import { SearchItemsByQueryUseCase } from "@/modules/search/application/useCases";

export class SearchItemsService {
  private searchItemsByQueryUseCase: SearchItemsByQueryUseCase;

  constructor(repository: ISearchRepository) {
    this.searchItemsByQueryUseCase = new SearchItemsByQueryUseCase(repository);
  }

  async searchItemsByQuery(query: string, offset: number = 0) {
    return this.searchItemsByQueryUseCase.execute(query, offset);
  }
}
