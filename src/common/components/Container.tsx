import { FC } from "react";
import { cn } from "@/common/lib";
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  ViewProps,
} from "react-native";

interface ViewContainerProps extends ViewProps {
  className?: string;
  dismissKeyboard?: boolean;
}

export const Container: FC<ViewContainerProps> = ({
  children,
  className,
  dismissKeyboard,
  ...props
}) => {
  const handleDismissKeyboard = () => Keyboard.dismiss();

  if (dismissKeyboard) {
    return (
      <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
        <View className={cn("flex-1 bg-neutral-50", className)} {...props}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <View className={cn("flex-1 bg-neutral-50", className)} {...props}>
      {children}
    </View>
  );
};
