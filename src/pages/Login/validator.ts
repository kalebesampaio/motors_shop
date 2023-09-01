import * as z from "zod";

export const schemaLogin = z.object({
  email: z.string().nonempty("Email é obrigatório"),
  password: z.string().nonempty("Senha é obrigatória"),
});
