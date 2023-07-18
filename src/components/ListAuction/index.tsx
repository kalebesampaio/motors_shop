import { ListAuctionStyle } from "./styles";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
interface A {
  children: any;
  title: string;
}
export const ListAuction = ({ children, title }: A) => {
  return (
    <ListAuctionStyle>
      <h2 id={title}>{title}</h2>
      <ScrollingCarousel>{children}</ScrollingCarousel>
    </ListAuctionStyle>
  );
};
