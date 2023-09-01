import { ButtonMobile, HeaderContainer, HeaderStyle } from "./styles";
import Logo from "../../assets/Logo.png";
import { TiThMenu } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <HeaderContainer>
        <figure>
          <img src={Logo} alt="" onClick={() => navigate("/home")} />
        </figure>
        <nav>
          <ButtonMobile>
            <TiThMenu />
          </ButtonMobile>
          <ul>
            <li>
              <a onClick={() => navigate("/home")} href="#Carros">
                Carros
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/home")} href="#Motos">
                Motos
              </a>
            </li>
            <li>
              <a onClick={() => navigate("/home")} href="#Leilão">
                Leilão
              </a>
            </li>
          </ul>
          <div>
            <a onClick={() => navigate("/login")}>Fazer Login</a>
            <button onClick={() => navigate("/register")}>Cadastrar</button>
          </div>
        </nav>
      </HeaderContainer>
    </HeaderStyle>
  );
};
