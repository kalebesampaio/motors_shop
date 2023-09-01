import { useContext } from "react";
import { Form } from "../../components/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ButtonForm,
  Input,
  Label,
  Paragraph,
  ParagraphLink,
  TitleForm,
} from "../../components/Form/styles";

import { LoginStyle } from "./styles";
import { useNavigate } from "react-router-dom";
import { AuthContext, IUserContext } from "../../providers/AuthProvider";
import { schemaLogin } from "./validator";

export const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useContext<IUserContext>(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaLogin),
  });
  return (
    <>
      <LoginStyle>
        <Form func={handleSubmit(signIn)}>
          <TitleForm>Login</TitleForm>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Digitar email"
            {...register("email")}
          />
          <span>{errors.email?.message?.toString()}</span>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            placeholder="Digitar senha"
            type="password"
            {...register("password")}
          />
          <ParagraphLink>Esqueci minha senha</ParagraphLink>
          <ButtonForm type="submit" color="var(--brand1)">
            Entrar
          </ButtonForm>
          <Paragraph>Ainda não possui conta?</Paragraph>
          <ButtonForm
            color="var(--grey10)"
            onClick={() => navigate("../register", { replace: true })}
          >
            Cadastrar
          </ButtonForm>
        </Form>
      </LoginStyle>
    </>
  );
};
