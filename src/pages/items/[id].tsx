import { GetServerSideProps } from "next";

export default function ItemDetailPage() {
  return (
    <div>
      <h1>Item Detail</h1>
      <p>Detalles del producto</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  console.log("id", id);
  return {
    props: {
      product: null,
    },
  };
};
