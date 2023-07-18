import { styled } from "styled-components";

export const CardVehicleStyle = styled.div`
  width: 312px;
  height: 350px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    img {
      width: 85%;
      height: 85%;
    }
  }
`;

export const CardVehicleImg = styled.div`
  width: 100%;
  height: 152px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey7);
  img {
    width: 70%;
    height: 70%;
    object-fit: cover;
    transition: all 0.6s;
  }
`;
export const CardVehicleText = styled.div`
  h3 {
    height: 22px;
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    font-family: "Lexend", sans-serif;
    line-height: 20px;
    color: var(--grey1);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  p {
    height: 48px;
    width: 100%;
    font-size: 14px;
    font-family: var(--font);
    line-height: 24px;
    color: var(--grey2);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
export const CardVehicleUser = styled.div`
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
    color: var(--grey2);
    margin-right: 10px;
    font-weight: 500;
    margin: 0;
  }
`;
export const CardVehicleDescription = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
    color: var(--grey1);
    font-weight: 600;
  }
`;
