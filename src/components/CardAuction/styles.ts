import { styled } from "styled-components";
export const CardAuctionStyle = styled.a`
  width: 735px;
  height: 388px;
  display: block;
  cursor: pointer;
  transition: all 0.7s;
  border-radius: 4px;
  overflow: hidden;
  &:hover {
    .cardItens {
      background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
        url("https://www.pngmart.com/files/10/Red-Kia-Car-PNG-File.png");
    }
    .cardButton {
      padding: 0px 26px 0px 36px;
      background-color: var(--random10);
    }
  }
  @media (max-width: 1050px) {
    width: 328px;
    height: 496px;
  }
`;
export const CardItemContainer = styled.div`
  width: 100%;
  height: 330px;
  padding: 24px 36px 24px 36px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 1)),
    url("https://www.pngmart.com/files/10/Red-Kia-Car-PNG-File.png");

  @media (max-width: 1050px) {
    width: 100%;
    height: 435px;
  }
`;
export const CardTime = styled.div`
  width: 123px;
  height: 36px;
  max-height: 36px;
  border-radius: 2rem;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;

  p {
    font-family: "Lexend", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: var(--grey1);
  }
  svg {
    font-size: 1.5rem;
    color: var(--brand2);
  }
`;
export const CardText = styled.div`
  height: 177px;

  h3 {
    height: 25px;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    font-family: "Lexend", sans-serif;
    line-height: 25px;
    color: var(--grey10);
    margin-bottom: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  p {
    height: 28px;
    width: 100%;
    font-size: 1rem;
    font-family: var(--font);
    line-height: 28px;
    color: var(--grey5);
    margin-bottom: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  @media (max-width: 1050px) {
    height: 298px;
    h3 {
      height: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      height: 84px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
export const CardUser = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  span {
    display: flex;
    width: 32px;
    height: 32px;
    background-color: var(--random1);
    border-radius: 132px;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-family: var(--font);
    color: #ffffff;
    font-weight: 500;
    margin-right: 10px;
  }
  p {
    font-size: 14px;
    font-family: var(--font);
    color: #ffffff;
    margin-right: 10px;
    font-weight: 500;
    margin: 0;
  }
  @media (max-width: 1050px) {
    height: 32px;
    p {
      height: auto;
      margin: 0;
    }
  }
`;
export const CardDescription = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

  div {
    display: flex;
    span {
      height: 32px;
      width: 50px;
      background-color: var(--brand4);
      border-radius: var(--border-radius);

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 14px;
      font-family: var(--font);
      color: var(--brand1);
      font-weight: 600;

      margin-right: 10px;
    }
  }
  p {
    font-size: 1rem;
    font-family: "Lexend", sans-serif;
    color: #ffffff;
    font-weight: 500;
  }
  @media (max-width: 1050px) {
    margin-top: 20px;

    display: block;
    p {
      height: auto;
      margin: 0;
    }
    span {
      height: auto;
      margin: 0;
      margin-bottom: 20px;
    }
  }
`;
export const CardButtonContainer = styled.div`
  width: 100%;
  height: 62px;
  background-color: var(--brand1);
  padding: 0px 36px 0px 36px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #ffffff;
  p {
    font-size: 1rem;
    font-family: var(--font);
    font-weight: 600;
  }
  svg {
    font-size: 1.5rem;
  }
  transition: 0.7s;
  @media (max-width: 1050px) {
    height: 61px;
  }
`;
