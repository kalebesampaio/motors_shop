import { Form } from "../../components/Form";
import {
  ButtonForm,
  ContainerAside,
  ContainerInput,
  Input,
  Label,
  Paragraph,
  ParagraphLink,
  TitleForm,
} from "../../components/Form/styles";
import { Aside, RegisterStyle } from "./styles";

export const Register = () => {
  return (
    <>
      <Aside />
      <RegisterStyle>
        <Form>
          <TitleForm>Cadastro</TitleForm>
          <Label>Infomações pessoais</Label>
          <Label htmlFor="name">Nome</Label>
          <Input id="name" placeholder="Ex: Samuel Leão" />

          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Ex: samuel@kenzie.com.br" />

          <Label htmlFor="cpf">CPF</Label>
          <Input id="cpf" placeholder="000.000.000-00" />

          <Label htmlFor="phone">Celular</Label>
          <Input id="phone" placeholder="(DDD) 90000-0000" />

          <Label htmlFor="birthday">Data de nascimento</Label>
          <Input id="birthday" placeholder="00/00/00" />

          <Label htmlFor="description">Descrição</Label>
          <Input id="description" placeholder="Digitar descrição" />

          <Label>Infomações de endereço</Label>

          <Label htmlFor="cep">CEP</Label>
          <Input id="cep" placeholder="00000.000" />

          <ContainerInput>
            <ContainerAside>
              <Label htmlFor="number">Número</Label>
              <Input id="number" placeholder="Digitar número" />
            </ContainerAside>

            <ContainerAside>
              <Label htmlFor="complement">Complemento</Label>
              <Input id="complement" placeholder="Ex: apart 307" />
            </ContainerAside>
          </ContainerInput>

          <Label>Tipo de conta</Label>

          <ContainerInput>
            <ContainerAside>
              <ButtonForm color="var(--brand1)">Comprador</ButtonForm>
            </ContainerAside>

            <ContainerAside>
              <ButtonForm color="var(--grey10)">Anuciante</ButtonForm>
            </ContainerAside>
          </ContainerInput>

          <Label htmlFor="password">Senha</Label>
          <Input id="password" placeholder="Digitar senha" />

          <Label htmlFor="confirm-password">Confirmar Senha</Label>
          <Input id="confirm-password" placeholder="Digitar senha" />

          <ButtonForm color="var(--brand1)">Finalizar cadastro</ButtonForm>
        </Form>
      </RegisterStyle>
    </>
  );
};
