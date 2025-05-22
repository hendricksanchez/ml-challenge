import { useEffect, useState } from "react";
import { ISearchResult } from "@/modules/search/domain/models";
import { fetchFromMiddleware } from "@/shared/infrastructure/http";
import { useRouter } from "next/router";

export const useSearchItems = (
  search: string | string[] | undefined,
  offset: number = 0
) => {
  const router = useRouter();

  const [results, setResults] = useState<ISearchResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchAction = async (query: string, offset: number = 0) => {
    try {
      setIsLoading(true);
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

  useEffect(() => {
    if (typeof search === "string") searchAction(search, offset);
    // if (!search) router.push("/");
  }, [search, offset, router]);

  return { isLoading, results, searchAction };
};
