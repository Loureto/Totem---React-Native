import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormProps } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  uc: z
    .string({ required_error: "Campo obrigatório" })
    .min(3, "Código inválido"),
});

type FormDataType = z.infer<typeof schema>;

const formConfig: UseFormProps<FormDataType> = {
  mode: "onBlur",
  defaultValues: { uc: "" },
  resolver: zodResolver(schema),
};

export namespace UC {
  export type DataType = FormDataType;
  export const config = formConfig;
}
