import { useRouter } from "next/router";
import { useSearchItems } from "@/modules/search/presentation/hooks";

const SearchResultsPage = () => {
  const router = useRouter();
  const { search, page } = router.query;

  const { items, isLoading } = useSearchItems(search, Number(page) || 0);

  if (isLoading) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Resultados para &quot;{search}&quot;</h2>
      <ul>
        {items?.items?.map((item) => (
          <li key={item.id}>
            <a href={`/items/${item.id}`}>
              <img src={item.picture} alt={item.title} />
              <div>
                <p>{item.title}</p>
                <p>
                  {item.price.amount} {item.price.currency}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
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
