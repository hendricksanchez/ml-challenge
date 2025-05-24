import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import { ItemList } from "@/modules/search/presentation/components/ItemList";
import { Pagination } from "@/modules/search/presentation/components/Pagination";
import { Spinner } from "@/shared/components/Spinner";
import { useSearchItems } from "@/modules/search/presentation/hooks";

interface ISearchResultsPage {
  search: string;
  page: number;
}

const SearchResultsPage = ({ search, page }: ISearchResultsPage) => {
  const { isLoading, results, searchAction } = useSearchItems();

  useEffect(() => {
    searchAction(search, page);
  }, [page, search]);

  if (isLoading) return <Spinner />;

  return (
    <React.Fragment>
      <ItemList items={results?.items} />
      <Pagination
        limit={results?.paging?.limit ?? 0}
        offset={results?.paging?.offset ?? 0}
        total={results?.paging.total ?? 0}
        onPageChange={(newPage) => searchAction(search, newPage)}
      />
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { search = "", page = 1 } = context.query;
  return {
    props: {
      search,
      page,
    },
  };
};

export default SearchResultsPage;
