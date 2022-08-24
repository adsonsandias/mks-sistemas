import styled from "styled-components";

export const Contents = styled.form`
  background: var(--primary-color);
  overflow: auto;
  height: calc(100vh - 16rem);
  padding-top: 2rem;
  padding-bottom: 10rem;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 2.94rem;
  margin-right: 2.94rem;
  margin-top: 2.25rem;
  margin-bottom: 2.38rem;

  h2 {
    font-size: 1.69rem;
    font-weight: 700;
    color: var(--secondary-color);
  }

  button {
    width: 2.38rem;
    height: 2.38rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--black);
    cursor: pointer;
    transition: all 0.3s ease;

    span {
      font-size: 1.75rem;
      font-weight: 400;
      color: var(--secondary-color);
      margin-bottom: 0.25rem;
    }

    &:hover {
      background-color: #222;
      transform: scale(1.1);
    }
  }
`;

export const SalesOrder = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 2.94rem;
  padding-right: 2.94rem;
  padding-top: 2rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 7rem;
  background-color: var(--primary-color);
  color: var(--secondary-color);

  strong {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const ButtonFinish = styled.button`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  border: none;
  background-color: var(--black);

  font-size: 1.78rem;
  font-weight: 700;
  color: var(--secondary-color);
`;
