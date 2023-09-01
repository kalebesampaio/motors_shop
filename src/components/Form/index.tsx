import { FormStyle } from "./styles";

export const Form = ({ children, func }: any) => {
  return <FormStyle onSubmit={func}>{children}</FormStyle>;
};
