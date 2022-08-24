import React from "react";

import { IRESULT } from "../../ListOfProduct";

import { IncrementItem, ItemSelectedStyled } from "./styles";
import { decrement, increment } from "../../../store/contador";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { removeSelected, useSelected } from "../../../store/selected";
import { useSelector } from "react-redux";
import { removeCartCount } from "../../../store/cart";
import { addCartCountUnit } from "../../../store/filter";

export function ItemSelected() {
  const [itemRemove, setItemRemove] = React.useState("");
  const [addUnitItem, setAddUnitItem] = React.useState("");

  const state = useAppSelector(state => state.filter.count);
  const dispatch = useAppDispatch();

  const { data } = useAppSelector(state => state.database);
  const selected = useSelector(useSelected);

  const itemSelectedGroup = selected.map(item => {
    const itemSelected = data.filter((selector: IRESULT) =>
      selector.name.includes(item.produto)
    );
    return itemSelected;
  });

  React.useEffect(() => {
    if (itemRemove.length > 0) {
      const handleRemoveItem = (): void => {
        dispatch(removeSelected(itemRemove));
        dispatch(removeCartCount());
      };
      handleRemoveItem();
    }
  }, [itemRemove]);

  function handledClick(event: any) {
    event.preventDefault();
    dispatch(addCartCountUnit(event.target.id));
  }

  return (
    <>
      {itemSelectedGroup.map(itemFilter => itemFilter[0]) &&
        itemSelectedGroup
          .map(itemFilter => itemFilter[0])
          .map((item: IRESULT) => (
            <ItemSelectedStyled key={item.id}>
              <div>
                <img src={item.photo} alt={item.name} />
                <span>{item.name}</span>
              </div>
              <div>
                <span>Qtd:</span>
                <IncrementItem>
                  <span onClick={() => dispatch(decrement())}>-</span>
                  <span>{state}</span>
                  <span id={item.name} onClick={handledClick}>
                    +
                  </span>
                </IncrementItem>
                <span>
                  {item.price &&
                    new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL"
                    }).format(Number(item.price))}
                </span>
              </div>
              <button onClick={() => setItemRemove(item.name)}>
                <span>x</span>
              </button>
            </ItemSelectedStyled>
          ))}
    </>
  );
}
