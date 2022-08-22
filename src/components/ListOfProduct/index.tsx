import React from "react";
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
  const [data, setData] = React.useState<IRESULT[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      // Loading initial
      setLoading(true);
      // fetchData
      const data = await fetch(
        "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
      );
      const { count, products } = await data.json();
      // Data
      setData(products);
      // Loading
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <Loading />;
  return (
    <Container>
      <ul>
        {data &&
          data.map(item => (
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
