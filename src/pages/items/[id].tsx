import { GetServerSideProps } from "next";
import { IItemDetail } from "@/modules/item/domain/models";
import { getItemDetailsByIdUseCase } from "@/modules/item/application/useCases";

interface IItemDetailPage {
  details: IItemDetail;
}

export default function ItemDetailPage({ details }: IItemDetailPage) {
  console.log("details", details);

  return (
    <div>
      <h1>Item Detail</h1>
      <p>Detalles del producto {details?.item?.id}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const results = await getItemDetailsByIdUseCase(String(id));
  return {
    props: {
      details: results,
    },
  };
};
