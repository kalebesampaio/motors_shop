import { styled } from "styled-components";

export const AnnouncementStyle = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, var(--brand1) 30%, var(--grey8) 30%);

  @media (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AnnouncementMain = styled.main`
  @media (max-width: 800px) {
    width: 95%;
  }
`;

export const AnnouncementAside = styled.aside`
  @media (max-width: 800px) {
    width: 95%;
  }
`;

export const AsideImages = styled.div`
  margin-top: 100px;
  margin-left: 20px;
  width: 440px;
  height: 337px;
  border-radius: var(--border-radius);
  padding: 36px 44px 36px 44px;
  background-color: var(--grey10);
  h3 {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey1);
    margin-bottom: 10px;
  }
  ul {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 108px;
      height: 108px;
      cursor: pointer;
      background-color: var(--grey7);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media (max-width: 1250px) {
    margin-top: 20px;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const AsideInfo = styled.div`
  width: 440px;
  height: 426px;
  border-radius: var(--border-radius);
  padding: 36px 44px 36px 44px;
  background-color: var(--grey10);
  margin-left: 20px;
  margin-top: 40px;
  text-align: center;
  .userInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    p {
      display: flex;
      width: 104px;
      height: 104px;
      background-color: var(--random1);
      border-radius: 132px;
      align-items: center;
      justify-content: center;

      font-size: 36px;
      font-family: var(--font);
      color: #ffffff;
      font-weight: 500;
      margin-right: 10px;
    }
  }
  h3 {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey1);
    margin-bottom: 20px;
  }
  .info {
    font-family: var(--font);
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: var(--grey2);
    margin-bottom: 20px;
  }
  button {
    width: 206px;
    height: 48px;
    border-radius: var(--border-radius);
    background-color: var(--grey0);
    border: 1.5px solid var(--grey0);

    font-family: var(--font);
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      background-color: transparent;
      color: var(--grey1);
    }
  }
  @media (max-width: 1250px) {
    margin-bottom: 50px;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const AnnouncementDivImg = styled.div`
  margin-top: 100px;
  width: 752px;
  height: 355px;
  background-color: var(--grey10);
  border-radius: var(--border-radius);

  figure {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 60%;
      cursor: pointer;
    }
  }
  @media (max-width: 800px) {
    width: 95%;
  }
`;
export const AnnouncementDivInfo = styled.div`
  margin-top: 20px;
  width: 751px;
  height: 240px;
  border-radius: var(--border-radius);
  background-color: var(--grey10);
  padding: 28px 44px 28px 44px;

  h2 {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .infoContainer {
    margin-top: 50px;
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      width: 113px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        width: 51px;
        height: 32px;
        border-radius: var(--border-radius);
        background-color: var(--brand4);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font);
        font-size: 14px;
        color: var(--brand1);
        font-weight: 600;
      }
    }
    p {
      font-family: "Lexend", sans-serif;
      font-weight: 600;
      font-size: 1rem;
      line-height: 20px;
      color: var(--grey1);
    }
  }
  button {
    margin-top: 25px;
    width: 100px;
    height: 38px;
    background-color: var(--brand1);
    border-radius: var(--border-radius);
    border: 1.5px solid var(--brand1);
    color: #ffffff;
    font-family: var(--font);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background-color: var(--brand2);
    }
  }
  @media (max-width: 800px) {
    width: 95%;
  }
`;

export const AnnouncementDivDescription = styled.div`
  width: 751px;
  height: 213px;
  padding: 36px 44px 36px 44px;
  border-radius: var(--border-radius);
  background-color: var(--grey10);
  margin-top: 20px;

  h3 {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey1);
    margin-bottom: 20px;
  }
  p {
    font-family: var(--font);
    font-size: 1rem;
    line-height: 28px;
    color: var(--grey2);

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  @media (max-width: 800px) {
    width: 95%;
  }
`;

export const AnnouncementDivComments = styled.div`
  width: 751px;
  height: 557px;
  padding: 36px 44px 36px 44px;
  border-radius: var(--border-radius);
  background-color: var(--grey10);
  margin-top: 25px;
  overflow: auto;
  h3 {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey1);
    margin-bottom: 20px;
  }
  ul {
    li {
      margin-bottom: 20px;
      div {
        display: flex;
        align-items: center;
        p {
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
        h4 {
          font-size: 14px;
          font-family: var(--font);
          color: var(--grey1);
          font-weight: 500;
          margin-right: 20px;
        }
        span {
          font-size: 12px;
          font-family: var(--font);
          color: var(--grey3);
          font-weight: 400;
        }
      }
      p {
        height: 72px;
        margin-top: 10px;
        font-size: 14px;
        font-family: var(--font);
        color: var(--grey2);
        font-weight: 400;
        line-height: 25px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
  margin-bottom: 20px;

  @media (max-width: 800px) {
    width: 95%;
  }
`;
export const AnnouncementMakeComment = styled.div`
  width: 751px;
  height: 289px;
  border-radius: var(--border-radius);
  padding: 36px 44px 36px 44px;
  background-color: var(--grey10);
  margin-bottom: 100px;
  .userInfo {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    p {
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
    h4 {
      font-size: 14px;
      font-family: var(--font);
      color: var(--grey1);
      font-weight: 500;
      margin-right: 20px;
    }
  }

  .makeComment {
    width: 100%;
    height: 128px;
    border-radius: var(--border-radius);
    border: 1.5px solid var(--grey7);
    position: relative;
    textarea {
      resize: none;
      width: 95%;
      height: 128px;
      padding: 10px 0px 0px 5%;
      border-radius: var(--border-radius);
      border: 1.5px solid var(--grey7);

      font-family: var(--font);
      font-size: 16px;
      line-height: 20px;
      color: var(--grey1);
    }
    button {
      margin-top: 25px;
      width: 100px;
      height: 38px;
      background-color: var(--brand1);
      border-radius: var(--border-radius);
      border: 1.5px solid var(--brand1);
      color: #ffffff;
      font-family: var(--font);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        background-color: var(--brand2);
      }
      position: absolute;
      top: 50%;
      left: 80%;
    }
  }
  @media (max-width: 1250px) {
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    width: 95%;
  }
`;
