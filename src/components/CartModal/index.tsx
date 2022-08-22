import React from "react";
import Modal from "react-modal";
import { ContextApi } from "../../Context/ContextApi";
import {
  ButtonFinish,
  Contents,
  IncrementItem,
  ItemSelected,
  Navigation,
  SalesOrder
} from "./styles";
import AppleImage from "../../../public/apple-watch.png";

import Image from "next/image";

export default function CartModal() {
  const { isOpen, closeModal } = React.useContext(ContextApi);

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        contentLabel="Carrinho de Compra"
      >
        <Navigation>
          <h2>
            Carrinho <br /> de compras
          </h2>
          <button onClick={closeModal}>
            <span>x</span>
          </button>
        </Navigation>

        <Contents onSubmit={handleSubmit}>
          <ItemSelected>
            <div>
              <Image src={AppleImage} alt="" />
              <span>Apple Watch Series 4 GPS</span>
            </div>
            <div>
              <span>Qtd:</span>
              <IncrementItem>
                <span>-</span>
                <span>0</span>
                <span>+</span>
              </IncrementItem>
              <span>R$ 399</span>
            </div>
            <button onClick={() => console.log("Cancel")}>
              <span>x</span>
            </button>
          </ItemSelected>

          <SalesOrder>
            <strong>Total</strong>
            <strong>R$ 798</strong>
          </SalesOrder>

          <ButtonFinish type="submit">Finalizar Compra</ButtonFinish>
        </Contents>
      </Modal>
    </>
  );
}
