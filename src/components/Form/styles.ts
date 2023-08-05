import { styled } from "styled-components";

export const FormStyle = styled.form`
  width: 412px;
  min-height: 542px;
  border-radius: var(--border-radius);
  padding: 44px 48px 44px 48px;
  background-color: var(--grey10);
  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const Input = styled.input`
  width: 95%;
  height: 48px;
  border-radius: var(--border-radius);
  border: 1.5px solid var(--grey7);
  font-size: 1rem;
  padding: 0px 0px 0px 5%;
  font-family: var(--font);
  cursor: pointer;
  &:hover {
    background-color: var(--grey8);
  }
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-family: var(--font);
  font-weight: 600;
  font-size: 14px;
  color: var(--grey1);
  display: block;
  padding: 8px 0px 8px 0px;
  cursor: pointer;
`;

export const TitleForm = styled.h4`
  font-family: "Lexend", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  margin-bottom: 20px;
`;

export const ParagraphLink = styled.a`
  display: block;
  width: 100%;
  font-family: var(--font);
  font-size: 14px;
  color: var(--grey2);
  text-align: end;
  font-weight: 600;
  cursor: pointer;
`;

export const ParagraphErro = styled.span``;

export const Paragraph = styled.p`
  display: block;
  text-align: center;
  width: 100%;
  font-family: var(--font);
  font-size: 14px;
  color: var(--grey2);
`;

export const ButtonForm = styled.button`
  width: 100%;
  height: 48px;
  border-radius: var(--border-radius);
  border: 1.5px solid
    ${(props) =>
      props.color == "var(--brand1)" ? props.color : "var(--grey4)"};
  background-color: ${(props) => props.color};

  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font);
  color: ${(props) =>
    props.color == "var(--brand1)" ? "#FFFFFF" : "var(--grey0)"};
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.color == "var(--brand1)" ? "var(--brand2)" : "var(--grey0)"};

    color: #ffffff;
  }
  margin-bottom: 25px;
  margin-top: 25px;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerAside = styled.div`
  width: 48%;
`;
