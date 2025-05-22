import React from "react";
import { useRouter } from "next/router";
import { ItemList } from "@/modules/search/presentation/components/ItemList";
import { useSearchItems } from "@/modules/search/presentation/hooks";

const SearchResultsPage = () => {
  const router = useRouter();
  const { search, page } = router.query;

  const { results, isLoading } = useSearchItems(search, Number(page) || 0);

  if (isLoading) return <p>Cargando...</p>;

  return (
    <React.Fragment>
      <ItemList items={results?.items} />
    </React.Fragment>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log("context.query", context.query);
//   const response = await fetch("/api/items");
//   console.log("response", response);
//   return {
//     props: {
//       itemsData: [],
//     },
//   };
// };

export default SearchResultsPage;
