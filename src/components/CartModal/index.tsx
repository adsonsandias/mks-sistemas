import React from "react";
import Modal from "react-modal";
import { ContextApi } from "../../Context/ContextApi";
import { getTotals } from "../../store/addcart";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ItemSelected } from "./itemCart";
import { ButtonFinish, Contents, Navigation, SalesOrder } from "./styles";

export default function CartModal() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.addcart.cartItem);
  const cartTotalAmount = useAppSelector(
    state => state.addcart.cartTotalAmount
  );

  const { isOpen, closeModal } = React.useContext(ContextApi);

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
  }

  React.useEffect(() => {
    dispatch(getTotals());
  }, [cartItems]);

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
          {cartItems &&
            cartItems.map(item => (
              <>
                <ItemSelected item={item} />

                <SalesOrder>
                  <strong>Total</strong>
                  <strong>{cartTotalAmount}</strong>
                </SalesOrder>
              </>
            ))}

          <ButtonFinish type="submit">Finalizar Compra</ButtonFinish>
        </Contents>
      </Modal>
    </>
  );
}
