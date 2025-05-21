import { ISearchResult } from "@/modules/search/domain/models";
import { ISearchRepository } from "@/modules/search/domain/repositories";
import { ApiHelper, httpClient } from "@/shared/infrastructure/http";
import { mapSearchItemsFromApi } from "@/modules/search/infrastructure/mappers";
import { ISearchItemsDtoResponse } from "@/modules/search/infrastructure/dtos";

const apiUrl = ApiHelper.prepareUrl("sites/MLA/");
const httpInstance = httpClient(apiUrl);

export class SearchRepositoryApiImpl implements ISearchRepository {
  async searchItems(query: string, offset?: number): Promise<ISearchResult> {
    const response = await httpInstance.get<ISearchItemsDtoResponse>(
      `search?q=${query}&offset=${offset || 0}`
    );
    return mapSearchItemsFromApi(response.data);
  }
}
