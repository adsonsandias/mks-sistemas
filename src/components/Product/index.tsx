import Image from "next/image";
import React from "react";

import IconSale from "../../../public/icon-sale.svg";
import { Contents, Skeleton } from "./styles";

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
  const { key, brand, description, name, photo, price } = props;
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }: any) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
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

      <button type="button">
        <Image src={IconSale} alt="Product Apple Watch" />
        <span>Comprar</span>
      </button>
    </Contents>
  );
}
