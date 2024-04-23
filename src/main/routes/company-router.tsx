import { ConfirmDateCompanyView, ConfirmNameCompanyView } from "@/modules";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const CompanyStackRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="ConfirmDateCompanyView"
    >
      <Stack.Screen
        name="ConfirmDateCompanyView"
        component={ConfirmDateCompanyView}
      />
      <Stack.Screen
        name="ConfirmNameCompanyView"
        component={ConfirmNameCompanyView}
      />
    </Stack.Navigator>
  );
};

export default CompanyStackRouter;
