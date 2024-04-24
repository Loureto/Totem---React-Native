import { View } from "react-native";

type SpacingProps = {
  width?: number;
  height?: number;
};

export const Spacing = ({ width, height }: SpacingProps) => {
  return (
    <View
      style={{
        height: height ? height : "100%",
        width: width ? width : "100%",
      }}
    />
  );
};
