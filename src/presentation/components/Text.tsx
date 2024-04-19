import { ReactNode } from "react";
import { Text as Txt } from "react-native";

const Title = ({ children }: { children: ReactNode }): JSX.Element => (
  <Txt className="text-lg text-neutral-900 font-semibold">{children}</Txt>
);

const Description = ({ children }: { children: ReactNode }): JSX.Element => (
  <Txt className="text-xs text-left font-normal text-gray-500">{children}</Txt>
);

export const Text = { Title, Description };
