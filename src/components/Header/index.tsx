import React from "react";
import Image from "next/image";

import IconCard from "../../../public/card.svg";
import { Container } from "./styles";

import { ContextApi } from "../../Context/ContextApi";
import { useAppSelector } from "../../store/hooks";

export function Header() {
  const { openModal } = React.useContext(ContextApi);
  const state = useAppSelector(state => state.cart.value);

  return (
    <Container>
      <div>
        <strong>
          MKS
          <span>Sistemas</span>
        </strong>
        <button type="button" onClick={openModal}>
          <Image src={IconCard} height="20" width="20" />
          <span>{state}</span>
        </button>
      </div>
    </Container>
  );
}
