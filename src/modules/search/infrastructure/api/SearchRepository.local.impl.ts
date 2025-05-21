import { ISearchResult } from "@/modules/search/domain/models";
import { ISearchRepository } from "@/modules/search/domain/repositories";
import searchData from "@/modules/search/infrastructure/data/search-MLA-iphone.json";
import { mapSearchItemsFromApi } from "@/modules/search/infrastructure/mappers";
import { ISearchItemResponse } from "@/modules/search/infrastructure/dtos";

export class SearchRepositoryLocalImpl implements ISearchRepository {
  async searchItems(query: string, offset?: number): Promise<ISearchResult> {
    const searchItems = searchData.results.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          items: mapSearchItemsFromApi({
            items: searchItems as unknown as ISearchItemResponse[],
            paging: searchData.paging,
          }).items,
          paging: {
            total: searchItems.length || 0,
            offset: offset || 0,
            limit: searchData.paging.limit,
          },
        });
      }, 1000);
    });
  }
}
