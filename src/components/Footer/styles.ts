import { styled } from "styled-components";

export const FooterStyle = styled.footer`
  max-width: 100%;
  height: 140px;
  padding: 0px 60px 0px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey0);

  figure {
    width: 33%;
  }
  div {
    width: 33%;
    text-align: center;
  }

  p {
    font-family: var(--font);
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  button {
    width: 53px;
    height: 50px;
    border-radius: var(--border-radius);
    border: none;
    background-color: var(--grey1);
    color: #ffffff;
    font-size: 1.5rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1050px) {
    padding: 0px 10px 0px 10px;
  }

  @media (max-width: 800px) {
    figure,
    div,
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 95%;
    }
    height: 310px;
    padding: 60px 0px 60px 0px;
    flex-direction: column;
  }
`;
