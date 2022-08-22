import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem 1.38rem;
  }
`;
