import {
  DuplicateIcon,
  LocIcon,
  ReligacaoIcon,
  Skeleton,
  Spacing,
} from "@/components";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { TouchableProps } from "react-native-svg";
import { cn } from "@/lib";
import { UC } from "../models";
import { useEffect } from "react";

type Params = TouchableProps & {
  data?: UC;
  isLoading?: boolean;
};

type IconContainerProps = {
  children: React.ReactNode;
};

export const IconContainer: React.FC<IconContainerProps> = ({ children }) => (
  <View className="w-10 h-10 items-center justify-center bg-orange-500/10 rounded-md">
    {children}
  </View>
);

type TitleProps = {
  uc: string;
};

export const Title: React.FC<TitleProps> = ({ uc = "" }) => (
  <Text className="text-sm font-bold">UC: {uc}</Text>
);

type BadgeProps = {
  pendencies: number;
};

export const Badge: React.FC<BadgeProps> = ({ pendencies = Infinity }) => (
  <Text
    className={cn(
      "text-[10px] font-semibold px-2 py-0.5 rounded",
      pendencies ? "bg-red-200 text-red-600" : "bg-green-200 text-green-600"
    )}
  >
    {pendencies ? "Cortada" : "Normal"}
  </Text>
);

type DescriptionProps = {
  description?: string;
  pendencies?: number;
};

export const Description: React.FC<DescriptionProps> = ({
  description = "",
  pendencies = Infinity,
}) => {
  if (pendencies) {
    return (
      <Text className="text-[10px] text-gray-500">
        {pendencies !== 1
          ? `Há ${pendencies} faturas pendentes`
          : `Há ${pendencies} fatura pendente`}
      </Text>
    );
  }

  return <Text className="text-[10px] text-gray-500">{description}</Text>;
};

type ContentProps = {
  children: React.ReactNode;
};

export const Content: React.FC<ContentProps> = ({ children }) => (
  <View className="flex-row items-center" style={{ gap: 4 }}>
    {children}
  </View>
);

export const Card = ({ data, isLoading = false, ...props }: Params) => {
  const pendencies = data ? data?.invoice.length : Infinity;
  return (
    <TouchableOpacity
      className="relative flex-row items-center justify-between bg-white border border-gray-200 rounded-md px-2 py-2"
      {...props}
    >
      <View className="flex-row items-start">
        <IconContainer>
          <ReligacaoIcon width={16} height={16} />
        </IconContainer>
        <Spacing width={10} />
        <View className="flex flex-1" style={{ gap: 0 }}>
          {isLoading && (
            <ActivityIndicator
              className="flex flex-1"
              size="small"
              color="#F97316"
            />
          )}
          {data && (
            <>
              <View className="w-full flex-row justify-between">
                {data && <Title uc={data.uc.toString()} />}
                {data && <Badge pendencies={pendencies} />}
              </View>

              <Content>
                <LocIcon height={10} width={10} />
                {data && <Description description={data?.address} />}
              </Content>

              <Content>
                <DuplicateIcon height={10} width={10} />
                {data && <Description pendencies={pendencies} />}
              </Content>
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
