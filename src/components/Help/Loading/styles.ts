import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem 1.38rem;
  }

  li {
    display: flex;
    background: var(--secondary-color);
    justify-content: center;
    list-style: none;
    padding: 1rem;
    height: 25rem;
    border-radius: 0.5rem;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    flex-direction: column;
    position: relative;

    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: skeleton 1.5s infinite linear;

    @keyframes skeleton {
      from {
        background-position: 0px;
      }
      to {
        background-position: -200%;
      }
    }
  }
`;
