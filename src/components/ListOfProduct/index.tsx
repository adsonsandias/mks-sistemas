import React from "react";

import { fetchProducts } from "../../store/database";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Loading } from "../Help/Loading";
import Product from "../Product";
import { Container } from "./styles";

export interface IRESULT {
  id: number;
  brand: string;
  createdAt: string;
  description: string;
  name: string;
  photo: string;
  price: string;
  updatedAt: string | number;
}

export default function ListOfProduct() {
  const { data, loading, error } = useAppSelector(state => state.database);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (error) return null;
  if (loading) return <Loading />;
  return (
    <Container>
      <ul>
        {data &&
          data.map((item: IRESULT) => (
            <Product
              key={item.id}
              brand={item.brand}
              name={item.name}
              description={item.description}
              id={item.id}
              createdAt={item.createdAt}
              photo={item.photo}
              price={item.price}
              updatedAt={item.updatedAt}
            />
          ))}
      </ul>
    </Container>
  );
}
