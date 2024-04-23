import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormProps } from "react-hook-form";
import { validatorCPF } from "./cpf.validator";
import { validatorCNPJ } from "./cnpj.validator";

const schema = z.object({
  document: z
    .string({ required_error: "Digite o seu CPF ou CNPJ" })
    .superRefine((value, ctx) => {
      if (value.length < 14) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "CPF ou CNPJ incompleto",
        });
      }

      if (value.length > 14 && value.length < 18) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "CNPJ incompleto",
        });
      }

      if (value.length <= 14 && !validatorCPF(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "CPF inválido",
        });
      }

      if (value.length > 14 && value.length <= 18 && !validatorCNPJ(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "CNPJ inválido",
        });
      }
    }),
});

export type AuthenticationData = z.infer<typeof schema>;

export const configFormProps: UseFormProps<AuthenticationData> = {
  mode: "onBlur",
  resolver: zodResolver(schema),
};
