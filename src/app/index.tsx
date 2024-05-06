import { NavigationContainer } from "@react-navigation/native";
import { InitialRouter } from "@/main";
import { Modal } from "@/components";
import { ReactQueryProvider } from "@/providers";

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
