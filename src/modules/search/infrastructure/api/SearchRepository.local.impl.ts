import { ISearchResult } from "@/modules/search/domain/models";
import { ISearchRepository } from "@/modules/search/domain/repositories";
import searchData from "@/modules/search/infrastructure/data/search-MLA-iphone.json";
import { mapSearchItemsFromApi } from "@/modules/search/infrastructure/mappers";
import { ISearchItemResponse } from "@/modules/search/infrastructure/dtos";

const itemsPerPage = Number(process.env.ITEMS_PER_PAGE || 0);

export class SearchRepositoryLocalImpl implements ISearchRepository {
  async searchItems(query: string, offset: number = 0): Promise<ISearchResult> {
    const filteredItems = searchData.results.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    const paginated = filteredItems.slice(offset, offset + itemsPerPage);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          items: mapSearchItemsFromApi({
            items: paginated as unknown as ISearchItemResponse[],
            paging: searchData.paging,
          }).items,
          paging: {
            total: paginated.length || 0,
            offset: offset || 0,
            limit: itemsPerPage,
          },
        });
      }, 1000);
    });
  }
}
