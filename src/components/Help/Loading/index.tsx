import { LoadingContainer } from "./styles";

export function Loading() {
  return (
    <LoadingContainer>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <li key={i}></li>
        ))}
      </ul>
    </LoadingContainer>
  );
}
