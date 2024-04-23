import { Modal } from "@/common";
import { InitialRouter } from "@/main";
import { ReactQueryProvider } from "@/providers";
import { NavigationContainer } from "@react-navigation/native";

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
