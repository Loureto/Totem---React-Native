import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { cn } from "../lib";

type CheckboxProps = TouchableOpacityProps & {
  isChecked: boolean;
  variant?: "primary" | "secondary";
};

const variants = {
  default: "border rounded flex justify-center items-center",
  button: {
    primary: (value: boolean) =>
      `border-orange-500 ${value ? "bg-orange-500" : "bg-transparent"}`,
    secondary: (value: boolean) =>
      `border-white ${value ? "bg-white" : "bg-transparent"}`,
  },
  icon: {
    primary: "#FFFFFF",
    secondary: "#F97316",
  },
};

export const CheckBox: FC<CheckboxProps> = ({
  isChecked = false,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <TouchableOpacity
      className={cn(
        variants.default,
        variants.button[variant](isChecked),
        className
      )}
      {...props}
    >
      {isChecked && (
        <AntDesign name="check" color={variants.icon[variant]} size={12} />
      )}
    </TouchableOpacity>
  );
};
