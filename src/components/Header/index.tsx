import { Container } from "./styles";
import Image from "next/image";
import IconCard from "../../../public/card.svg";
import CartModal from "../CartModal";
import React from "react";
import { ContextApi } from "../../Context/ContextApi";

export function Header() {
  const { isOpen, closeModal, openModal } = React.useContext(ContextApi);

  return (
    <Container>
      <div>
        <strong>
          MKS
          <span>Sistemas</span>
        </strong>
        <button type="button" onClick={openModal}>
          <Image src={IconCard} height="20" width="20" />
          <span>0</span>
        </button>
      </div>
    </Container>
  );
}
