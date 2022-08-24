import React from "react";

import { IncrementItem, ItemSelectedStyled } from "./styles";

import { useAppDispatch } from "../../../store/hooks";
import {
  addCartItem,
  decreaseCartItem,
  removeCartItem
} from "../../../store/addcart";
import { IITEMPRODUCTPROPS } from "../../../types/globolTypes";

export function ItemSelected({ ...props }) {
  const { item } = props;
  const dispatch = useAppDispatch();

  function handleRemoveCartItem(item: IITEMPRODUCTPROPS) {
    dispatch(removeCartItem(item));
  }

  function handledecreaseCartItem(item: IITEMPRODUCTPROPS) {
    dispatch(decreaseCartItem(item));
  }

  function handleIncrementCartItem(item: IITEMPRODUCTPROPS) {
    dispatch(addCartItem(item));
  }

  return (
    <>
      <ItemSelectedStyled key={item.id}>
        <div>
          <img src={item.photo} alt={item.name} />
          <span>{item.name}</span>
        </div>
        <div>
          <span>Qtd:</span>
          <IncrementItem>
            <span id={item.name} onClick={() => handledecreaseCartItem(item)}>
              -
            </span>
            <span>{item.cartQuantity}</span>
            <span id={item.name} onClick={() => handleIncrementCartItem(item)}>
              +
            </span>
          </IncrementItem>
          <span>
            {Number(item.price) * item.cartQuantity &&
              new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(Number(Number(item.price) * item.cartQuantity))}
          </span>
        </div>
        <button onClick={() => handleRemoveCartItem(item)}>
          <span>x</span>
        </button>
      </ItemSelectedStyled>
    </>
  );
}
