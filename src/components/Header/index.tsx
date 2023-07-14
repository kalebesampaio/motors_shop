import { ButtonMobile, HeaderContainer, HeaderStyle } from "./styles";
import Logo from "../../assets/Logo.png";
import { TiThMenu } from "react-icons/ti";

export const Header = () => {
  return (
    <HeaderStyle>
      <HeaderContainer>
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <nav>
          <ButtonMobile>
            <TiThMenu />
          </ButtonMobile>
          <ul>
            <li>Carros</li>
            <li>Motos</li>
            <li>Leilão</li>
          </ul>
          <div>
            <a href="">Fazer Login</a>
            <button>Cadastrar</button>
          </div>
        </nav>
      </HeaderContainer>
    </HeaderStyle>
  );
};
