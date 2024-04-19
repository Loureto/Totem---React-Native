import { Stack } from "expo-router";
import { FC } from "react";

type StackProps = typeof Stack.Screen;

export const PrivateRoute: FC<StackProps> = (props) => {
  const token = localStorage.getItem("token");

  return token ? (
    <Stack.Screen {...props} />
  ) : (
    <Stack.Screen name="/index" redirect />
  );
};
