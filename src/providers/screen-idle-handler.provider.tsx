import { router } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { useTimerStore } from "../store";

type Props = {
  children: React.ReactNode;
};

const state = {
  timerLimit: 30,
  timeout: 1000,
};

export default function ScreenIdleHandlerProvider({ children }: Props) {
  const [interactionTime, setInteractionTime] = useState<NodeJS.Timeout>();
  const [lastClickTime, setLastClickTime] = useState<number>(
    new Date().getTime()
  );
  const { decrement, reset } = useTimerStore();

  const timerRef = useRef<NodeJS.Timeout>();
  timerRef.current = interactionTime;

  const handler = useCallback(() => {
    reset();
    setLastClickTime(new Date().getTime());
  }, []);

  const handleTimer = useCallback(() => {
    if (interactionTime) {
      clearInterval(interactionTime);
    }
    setInteractionTime(
      setInterval(() => {
        const now = new Date().getTime();
        const diferenca = (now - lastClickTime) / 1000;
        decrement();
        if (diferenca > state.timerLimit) {
          reset();
          clearInterval(timerRef.current);
          router.replace("/");
        }
      }, state.timeout)
    );
  }, [lastClickTime]);

  useEffect(() => handleTimer(), [handleTimer]);

  return (
    <TouchableWithoutFeedback className="flex flex-1" onPress={handler}>
      <View className="flex flex-1">{children}</View>
    </TouchableWithoutFeedback>
  );
}
