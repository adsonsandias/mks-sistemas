import React from "react";
import Modal from "react-modal";
import { ContextApi } from "../../Context/ContextApi";
import { ButtonFinish, Contents, Navigation, SalesOrder } from "./styles";

import { ItemSelected } from "./itemCart";

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
          <ItemSelected />

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
