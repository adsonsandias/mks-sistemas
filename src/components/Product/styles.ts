import styled from "styled-components";

export const Contents = styled.li`
  display: flex;
  background: var(--secondary-color);
  justify-content: center;
  list-style: none;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  flex-direction: column;
  position: relative;

  div:first-child {
    align-self: center;
    margin-bottom: 0.88rem;
    display: grid;
    grid-area: 1/1;
    flex: 2;

    img {
      grid-area: 1/1;
      display: grid;
      width: 100% !important;
      height: 100% !important;
      background-size: cover;
    }
  }

  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 1rem;
      font-weight: 400;
      max-width: 14ch;
    }

    span {
      font-size: 1rem;
      font-weight: 600;
      padding: 0.25rem;
      background: #373737;
      border-radius: 0.31rem;

      color: var(--secondary-color);
    }
  }

  p {
    font-size: 0.75rem;
    font-weight: 300;
    margin-bottom: 2rem;
    margin-top: 0.5rem;
  }

  button {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 2rem;
    border: none;
    background: var(--primary-color);
    border-radius: 0px 0px 8px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    span {
      margin-left: 0.75rem;
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--secondary-color);
      text-transform: uppercase;
    }
  }
`;

export const Skeleton = styled.div`
  grid-area: 1/1;
  min-width: 100%;
  min-height: 100%;
  width: 220px;
  height: 200px;
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
`;
