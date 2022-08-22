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

export const ItemSelected = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  margin-left: 2.94rem;
  margin-right: 2.94rem;
  margin-bottom: 1rem;
  background: var(--secondary-color);
  padding: 1.25rem 1.5rem;
  border-radius: 0.5rem;
  position: relative;

  div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 60px !important;
    }

    span {
      margin-left: 1rem;
      font-size: 0.88rem;
      font-weight: 400;
      width: 10ch;
    }
  }

  div:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    span:first-child {
      grid-area: -2/1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.88rem;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > span:last-child {
      font-weight: 700;
      grid-area: span 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  button {
    position: absolute;
    left: auto;
    right: -0.5rem;
    top: -0.5rem;
    width: 1.75rem;
    height: 1.75rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--black);
    cursor: pointer;
    transition: all 0.3s ease;

    span {
      font-size: 1.25rem;
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

export const IncrementItem = styled.div`
  grid-area: -1/1;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 20px;
    background-color: #ffffff !important;
    font-size: 1rem !important;
    font-weight: 700 !important;
    transition: all 0.3s ease;
  }

  span:first-child {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-top: 1px solid #ededed;
    border-left: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    cursor: pointer;

    &:hover {
      background-color: #ededed !important;
    }
  }

  span:nth-child(2) {
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    cursor: pointer;
  }

  span:nth-child(3) {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-top: 1px solid #ededed;
    border-right: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    cursor: pointer;

    &:hover {
      background-color: #ededed !important;
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
