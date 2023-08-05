import { styled } from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  max-width: 100vw;
  height: 80px;
  background-color: black;
  padding: 0px 60px 0px 60px;
  background-color: var(--grey10);
  border-bottom: 1px solid var(--grey6);
  @media (max-width: 1050px) {
    padding: 0px 0px 0px 0px;
  }
  position: fixed;
  z-index: 999;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  figure {
    width: 60%;
    img {
      cursor: pointer;
    }
  }
  nav {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    ul {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-right: 2.8px solid rgba(222, 226, 230, 0.9);
      li {
        a {
          color: var(--grey2);
          cursor: pointer;
          font-family: var(--font);
          font-size: 1rem;
          font-weight: 600;
        }
      }
    }
    div {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      a {
        font-family: var(--font);
        font-size: 1rem;
        font-weight: 600;
        color: var(--grey2);
      }
      button {
        width: 133px;
        height: 48px;
        background-color: transparent;
        border-radius: var(--border-radius);
        border: 1.5px solid var(--grey4);

        font-family: var(--font);
        color: var(--grey0);
        font-size: 1rem;
        font-weight: 600;

        cursor: pointer;

        &:hover {
          background-color: var(--grey0);
          border-color: var(--grey0);
          color: var(--grey10);
        }
      }
    }
  }
  @media (max-width: 1300px) {
    figure,
    nav {
      width: 50%;
    }
  }
  @media (max-width: 1050px) {
    padding: 0px 10px 0px 10px;
    nav {
      justify-content: end;
      ul,
      div {
        display: none;
      }
    }
  }
`;
export const ButtonMobile = styled.button`
  background-color: transparent;
  border: none;
  color: var(--grey0);
  font-size: 1.3rem;
  display: none;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  @media (max-width: 1050px) {
    display: flex;
  }
`;
