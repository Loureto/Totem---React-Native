import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthenticationView } from "../factories";
import IndividualStackRouter from "./individual-router";
import CompanyStackRouter from "./company-router";

const Stack = createNativeStackNavigator();

export const InitialRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AuthenticationView"
    >
      <Stack.Screen name="AuthenticationView" component={AuthenticationView} />
      <Stack.Screen
        name="IndividualStackRouter"
        component={IndividualStackRouter}
      />
      <Stack.Screen name="CompanyStackRouter" component={CompanyStackRouter} />
    </Stack.Navigator>
  );
};

export default InitialRouter;
