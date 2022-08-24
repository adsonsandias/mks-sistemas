import React from "react";
import Image from "next/image";

import { Contents, Skeleton } from "./styles";
import IconSale from "../../../public/icon-sale.svg";

import { useAppDispatch } from "../../store/hooks";
import { addSelected } from "../../store/selected";
import { addCartCount } from "../../store/cart";

interface IITEMPRODUCTPROPS {
  key: number;
  id: number;
  brand: string;
  createdAt?: string;
  description: string;
  name: string;
  photo: string;
  price: string;
  updatedAt?: string | number;
}

export default function Product({ ...props }: IITEMPRODUCTPROPS) {
  const { id, key, brand, description, name, photo, price } = props;
  const [skeleton, setSkeleton] = React.useState(true);
  const dispatch = useAppDispatch();

  function handleLoad({ target }: any) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  function handledClick(event: any) {
    event.preventDefault();
    dispatch(addSelected(name));
    dispatch(addCartCount());
  }

  return (
    <>
      <Contents key={key}>
        <div>
          {skeleton && <Skeleton />}
          <img onLoad={handleLoad} src={photo} alt={brand} />
        </div>

        <div>
          <h4>{name}</h4>
          <span>
            {price &&
              new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(Number(price))}
          </span>
        </div>
        <p>{description}</p>

        <button type="button" onClick={handledClick}>
          <Image src={IconSale} alt={name} />
          <span>Comprar</span>
        </button>
      </Contents>
    </>
  );
}
