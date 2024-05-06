import { NavigationContainer } from "@react-navigation/native";
import { InitialRouter } from "@/main";
import { Modal } from "@/common/components";
import { ReactQueryProvider } from "@/common/providers";

export default function App() {
  return (
    <ReactQueryProvider>
      <NavigationContainer independent>
        <InitialRouter />
      </NavigationContainer>

      <Modal />
    </ReactQueryProvider>
  );
}
