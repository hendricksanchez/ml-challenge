import { GetServerSideProps } from "next";

const SearchResultsPage = () => {
  return (
    <div>
      <h1>Search Results</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("context.query", context.query);
  return {
    props: {
      itemsData: [],
    },
  };
};

export default SearchResultsPage;
