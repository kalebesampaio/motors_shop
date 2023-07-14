import { ListAuctionStyle } from "./styles";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

export const ListAuction = ({ children }: any) => {
  return (
    <ListAuctionStyle>
      <h2>Leilão</h2>
      <ScrollingCarousel>{children}</ScrollingCarousel>
    </ListAuctionStyle>
  );
};
