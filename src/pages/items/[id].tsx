import React from "react";
import { GetServerSideProps } from "next";
import { IItem } from "@/modules/item/domain/models";
import { getItemDetailsByIdUseCase } from "@/modules/item/application/useCases";
import { ItemDetail } from "@/modules/item/presentation/components/ItemDetail/ItemDetail";
import { ItemContainer } from "@/modules/item/presentation/components/ItemContainer";
import { Breadcrumb } from "@/modules/item/presentation/components/Breadcrumb";

interface IItemDetailPage {
  item: IItem;
}

export default function ItemDetailPage({ item }: IItemDetailPage) {
  return (
    <ItemContainer>
      <Breadcrumb items={item.categoryPathFromRoot} />
      <ItemDetail item={item} />
    </ItemContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  try {
    const item = await getItemDetailsByIdUseCase(String(id));
    return {
      props: {
        item: item ?? null,
      },
    };
  } catch (error) {
    console.log("Error calling getItemDetailsByIdUseCase", error);
    return {
      notFound: true,
    };
  }
};
