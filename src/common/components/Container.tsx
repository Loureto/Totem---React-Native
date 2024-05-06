import { cn } from "@/common/lib";
import { FC } from "react";
import { SafeAreaView } from "react-native";
import { SafeAreaViewProps } from "react-native-safe-area-context";

interface ViewContainerProps extends SafeAreaViewProps {
  className?: string;
}

export const Container: FC<ViewContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <SafeAreaView
      className={cn("flex flex-1 bg-neutral-50", className)}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};
