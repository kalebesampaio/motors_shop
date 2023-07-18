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
            <li>
              <a href="#Carros">Carros</a>
            </li>
            <li>
              <a href="#Motos">Motos</a>
            </li>
            <li>
              <a href="#Leilão">Leilão</a>
            </li>
          </ul>
          <div>
            <a>Fazer Login</a>
            <button>Cadastrar</button>
          </div>
        </nav>
      </HeaderContainer>
    </HeaderStyle>
  );
};
