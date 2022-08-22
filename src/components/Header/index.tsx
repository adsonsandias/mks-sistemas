import { Container } from "./styles";
import Image from "next/image";
import IconCard from "../../../public/card.svg";

export function Header() {
  return (
    <Container>
      <div>
        <strong>
          MKS
          <span>Sistemas</span>
        </strong>
        <button>
          <Image src={IconCard} height="20" width="20" />
          <span>0</span>
        </button>
      </div>
    </Container>
  );
}
