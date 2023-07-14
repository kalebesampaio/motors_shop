import {
  CardAuctionStyle,
  CardDescription,
  CardItemContainer,
  CardText,
  CardTime,
  CardUser,
  CardButtonContainer,
} from "./styles";
import { BiTime } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

export const CardAuction = () => {
  return (
    <CardAuctionStyle>
      <CardItemContainer className="cardItens">
        <CardTime>
          <BiTime />
          <p>01:58:00</p>
        </CardTime>
        <CardText>
          <h3>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <CardUser>
            <span>R</span>
            <p>Rodrigo Tavares</p>
          </CardUser>
          <CardDescription>
            <div>
              <span>2013</span>
              <span>0 KM</span>
            </div>
            <p>R$ 00.000,00</p>
          </CardDescription>
        </CardText>
      </CardItemContainer>
      <CardButtonContainer className="cardButton">
        <p>Acessar página do leilão</p> <BsArrowRight />
      </CardButtonContainer>
    </CardAuctionStyle>
  );
};
