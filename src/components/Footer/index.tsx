import { FooterStyle } from "./styles";
import Logo from "../../assets/Logo2.png";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export const Footer = () => {
  return (
    <FooterStyle>
      <figure>
        <img src={Logo} alt="" />
      </figure>
      <div>
        <p>© 2022 - Todos os direitos reservados.</p>
      </div>
      <div className="button">
        <a href="#">
          <MdOutlineKeyboardArrowUp />
        </a>
      </div>
    </FooterStyle>
  );
};
