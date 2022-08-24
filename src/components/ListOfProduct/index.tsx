import React from "react";
import { Container } from "./styles";
import { IITEMPRODUCTPROPS } from "../../types/globolTypes";

import { fetchProducts } from "../../store/database";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import Product from "../Product";
import { Loading } from "../Help/Loading";
import { getTotals } from "../../store/addcart";

export default function ListOfProduct() {
  const { data, loading, error } = useAppSelector(state => state.database);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getTotals());
  }, []);

  if (error) return null;
  if (loading) return <Loading />;
  return (
    <Container>
      <ul>
        {data &&
          data.map((item: IITEMPRODUCTPROPS) => (
            <Product key={item.id} item={item} />
          ))}
      </ul>
    </Container>
  );
}
