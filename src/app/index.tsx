import { InitialRouter } from "@/main";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer independent>
      <InitialRouter />
    </NavigationContainer>
  );
}
