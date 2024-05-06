import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthenticationUcScreen } from "@/modules";
import CompanyStackRouter from "./company-router";
import IndividualStackRouter from "./individual-router";
import ServicesStackRouter from "./services-router";

const Stack = createNativeStackNavigator();

export const InitialRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AuthenticationUcScreen"
    >
      <Stack.Screen
        name="AuthenticationUcScreen"
        component={AuthenticationUcScreen}
      />
      <Stack.Screen
        name="IndividualStackRouter"
        component={IndividualStackRouter}
      />
      <Stack.Screen name="CompanyStackRouter" component={CompanyStackRouter} />
      <Stack.Screen
        name="ServicesStackRouter"
        component={ServicesStackRouter}
      />
    </Stack.Navigator>
  );
};

export default InitialRouter;
