import React from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ISearchResult } from "@/modules/search/domain/models";
import { searchItemsByQueryUseCase } from "@/modules/search/application/useCases";
import { ItemList } from "@/modules/search/presentation/components/ItemList";
import { Pagination } from "@/modules/search/presentation/components/Pagination";

interface ISearchResultsPage {
  results: ISearchResult | undefined;
  search: string;
}

const SearchResultsPage = ({ results, search }: ISearchResultsPage) => {
  const router = useRouter();

  const handleOnPageChange = (newPage: number) => {
    router.push(`/items?search=${encodeURIComponent(search)}&page=${newPage}`);
  };

  return (
    <React.Fragment>
      <ItemList items={results?.items} />
      <Pagination
        limit={results?.paging?.limit ?? 0}
        offset={results?.paging?.offset ?? 0}
        total={results?.paging.total ?? 0}
        onPageChange={(newPage) => handleOnPageChange(newPage)}
      />
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { search = "", page = 0 } = context.query;
  const results = await searchItemsByQueryUseCase(String(search), Number(page));
  return {
    props: {
      search,
      results,
    },
  };
};

export default SearchResultsPage;
