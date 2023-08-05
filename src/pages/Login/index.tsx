import { Form } from "../../components/Form";
import {
  ButtonForm,
  Input,
  Label,
  Paragraph,
  ParagraphLink,
  TitleForm,
} from "../../components/Form/styles";

import { LoginStyle } from "./styles";

export const Login = () => {
  return (
    <>
      <LoginStyle>
        <Form>
          <TitleForm>Login</TitleForm>
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Digitar email" />
          <Label htmlFor="password">Senha</Label>
          <Input id="password" placeholder="Digitar senha" />
          <ParagraphLink>Esqueci minha senha</ParagraphLink>
          <ButtonForm color="var(--brand1)">Entrar</ButtonForm>
          <Paragraph>Ainda não possui conta?</Paragraph>
          <ButtonForm color="var(--grey10)">Cadastrar</ButtonForm>
        </Form>
      </LoginStyle>
    </>
  );
};
