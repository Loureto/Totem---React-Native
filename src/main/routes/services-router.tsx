import { ServicesView } from "@/modules";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const ServicesStackRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="ServicesView"
    >
      <Stack.Screen name="ServicesView" component={ServicesView} />
    </Stack.Navigator>
  );
};

export default ServicesStackRouter;
