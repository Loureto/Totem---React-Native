import {
  ConfirmDateIndividualView,
  ConfirmNameIndividualView,
} from "@/presentation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const IndividualStackRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="ConfirmDateIndividualView"
    >
      <Stack.Screen
        name="ConfirmDateIndividualView"
        component={ConfirmDateIndividualView}
      />
      <Stack.Screen
        name="ConfirmNameIndividualView"
        component={ConfirmNameIndividualView}
      />
    </Stack.Navigator>
  );
};

export default IndividualStackRouter;
