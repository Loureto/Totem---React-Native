import { FC, ReactNode } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { cn } from "../lib";
type Props = {
  children: ReactNode;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    rowGap: 8,
  },
  content: {
    flex: 1,
    paddingLeft: 6,
  },
  headRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F97316",
    paddingVertical: 10,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  bodyRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "rgba(249, 115, 22, 0.1)",
  },
  textHead: {
    fontSize: 14,
    fontWeight: "600",
    flexGrow: 0,
    color: "#FFFFFF",
  },
  textBody: {
    fontSize: 12,
    fontWeight: "400",
    flexGrow: 0,
  },
});

const variants = {
  bodyRow: {
    default: "w-full flex-row items-center py-2.5",
    primary: "bg-orange-500/10",
    secondary: "bg-white",
  },
};

const Th: FC<Props> = ({ children }) => {
  const asChild = typeof children !== "string";
  return (
    <View style={styles.content}>
      {asChild && children}
      {!asChild && <Text style={styles.textHead}>{children}</Text>}
    </View>
  );
};
const Td: FC<Props> = ({ children }) => {
  const asChild = typeof children !== "string";
  return (
    <View style={styles.content}>
      {asChild && children}
      {!asChild && <Text style={styles.textBody}>{children}</Text>}
    </View>
  );
};

const HeadRow: FC<Props> = ({ children }) => {
  return <View style={styles.headRow}>{children}</View>;
};

type BodyRowProps = TouchableOpacityProps & {
  variant?: "primary" | "secondary";
};

const BodyRow: FC<BodyRowProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <TouchableOpacity
      className={cn(variants.bodyRow.default, variants.bodyRow[variant])}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

const Table: FC<Props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export { BodyRow, HeadRow, Table, Td, Th };
