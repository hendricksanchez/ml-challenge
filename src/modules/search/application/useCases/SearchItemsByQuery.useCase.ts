import { fetchFromMiddleware } from "@/shared/infrastructure/http";
import { ISearchResult } from "@/modules/search/domain/models";

const itemsPerPage = Number(process.env.NEXT_PUBLIC_ITEMS_PER_PAGE);
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const searchItemsByQueryUseCase = async (
  search: string,
  page: number
) => {
  const offset = page * itemsPerPage;
  try {
    return await fetchFromMiddleware<ISearchResult>(
      `${baseUrl}/api/items?q=${encodeURIComponent(search)}&offset=${offset}`
    );
  } catch (error) {
    console.log("Error fetching items", error);
  }
};
