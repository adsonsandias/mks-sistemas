import styled from "styled-components";

export const Container = styled.header`
  background: var(--primary-color);
  display: flex;
  height: 6.25rem;
  align-items: center;
  padding: 1rem;

  & > div {
    justify-content: space-between;
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;

    strong {
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--secondary-color);
      line-height: 1.19;

      span {
        font-size: 1.5rem;
        font-weight: 300;
        margin-left: 0.5rem;
      }
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    color: var(--secondary-color);
    cursor: pointer;

    span {
      margin-left: 0.88rem;
      font-size: 1.13rem;
      font-weight: 600;
      color: var(--black);
    }
  }
`;
