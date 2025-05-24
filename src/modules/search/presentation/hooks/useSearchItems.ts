import { useState } from "react";
import { ISearchResult } from "@/modules/search/domain/models";
import { fetchFromMiddleware } from "@/shared/infrastructure/http";

const itemsPerPage = Number(process.env.NEXT_PUBLIC_ITEMS_PER_PAGE);

export const useSearchItems = () => {
  const [results, setResults] = useState<ISearchResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchAction = async (query: string, page: number = 0) => {
    const offset = page * itemsPerPage;
    setIsLoading(true);
    try {
      const response = await fetchFromMiddleware<ISearchResult>(
        `api/items?q=${encodeURIComponent(query)}&offset=${offset}`
      );
      setResults(response);
    } catch (error) {
      console.log("Error fetching items", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, results, searchAction };
};
