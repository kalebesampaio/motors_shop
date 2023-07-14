import { styled } from "styled-components";

export const HomeStyle = styled.div``;

export const HomeNavbar = styled.div`
  max-width: 100%;
  height: 581px;
  background-color: var(--brand2);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    max-width: 748px;
    text-align: center;
    line-height: 56px;
    font-size: 2.75rem;
    font-weight: 700;
    font-family: "Lexend", sans-serif;
    color: var(--brand4);
  }

  p {
    max-width: 748px;
    text-align: center;
    line-height: 56px;
    font-size: 1rem;
    font-weight: 400;
    font-family: var(--font);
    color: var(--grey9);
  }

  div {
    width: 381px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
  @media (max-width: 750px) {
    padding: 0px 10px 0px 10px;
    h1 {
      font-size: 2rem;
      line-height: 40px;
    }
    p {
      line-height: 28px;
    }
    div {
      width: 100%;
      flex-direction: column;
    }
  }
`;

export const HomeButton = styled.button`
  width: 182px;
  height: 48px;
  background-color: transparent;

  border-radius: var(--border-radius);
  border: 1.5px solid var(--grey10);

  font-size: 1rem;
  font-family: var(--font);
  font-weight: 600;
  color: var(--grey10);

  cursor: pointer;

  &:hover {
    background-color: var(--grey10);
    color: var(--grey0);
  }

  @media (max-width: 750px) {
    margin-top: 21px;
    width: 80%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const HomeMain = styled.main`
  max-width: 100%;
  padding: 0px 0px 0px 60px;
`;
