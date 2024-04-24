import { type VariantProps, cva } from "class-variance-authority";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "flex flex-row items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-orange-500",
        secondary: "border border-orange-500",
        destructive: "bg-red-500",
        ghost: "bg-slate-700",
        link: "text-primary underline-offset-4",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-2",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const buttonTextVariants = cva("text-center font-medium", {
  variants: {
    variant: {
      default: "text-white",
      secondary: "text-orange-500",
      destructive: "text-white",
      ghost: "text-primary-foreground",
      link: "text-orange-500 underline",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label: string;
  labelClasses?: string;
  isLoading?: boolean;
}
function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isLoading && <ActivityIndicator size="small" color="#FFF" />}
      {!isLoading && (
        <Text
          className={cn(
            buttonTextVariants({ variant, size, className: labelClasses })
          )}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export { Button, buttonVariants, buttonTextVariants };
