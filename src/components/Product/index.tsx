import React from "react";
import Image from "next/image";
import { IITEMPRODUCTPROPS } from "../../types/globolTypes";

import { Contents, Skeleton } from "./styles";
import IconSale from "../../../public/icon-sale.svg";

import { useAppDispatch } from "../../store/hooks";
import { addCartItem } from "../../store/addcart";

export default function Product({ ...props }) {
  const { item } = props;
  const [skeleton, setSkeleton] = React.useState(true);
  const dispatch = useAppDispatch();

  function handleLoad({ target }: any) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  function handleAddToCart(item: IITEMPRODUCTPROPS) {
    dispatch(addCartItem(item));
  }

  return (
    <>
      <Contents key={item.key}>
        <div>
          {skeleton && <Skeleton />}
          <img onLoad={handleLoad} src={item.photo} alt={item.brand} />
        </div>

        <div>
          <h4>{item.name}</h4>
          <span>
            {item.price &&
              new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(Number(item.price))}
          </span>
        </div>
        <p>{item.description}</p>

        <button type="button" onClick={() => handleAddToCart(item)}>
          <Image src={IconSale} alt={item.name} />
          <span>Comprar</span>
        </button>
      </Contents>
    </>
  );
}
