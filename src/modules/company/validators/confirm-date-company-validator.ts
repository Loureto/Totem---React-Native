import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormProps } from "react-hook-form";
import { z } from "zod";

const ConfirmDateSchema = z.object({
  date: z
    .string({ required_error: "Campo obrigatório" })
    .min(10, "Data inválida"),
});

export type ConfirmDateType = z.infer<typeof ConfirmDateSchema>;

export const confirmDateConfig: UseFormProps<ConfirmDateType> = {
  mode: "onBlur",
  resolver: zodResolver(ConfirmDateSchema),
};
