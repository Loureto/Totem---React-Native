import { DuplicateScreen } from "@/modules/duplicate";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenIdleHandlerProvider from "@/providers/screen-idle-handler.provider";

const Stack = createNativeStackNavigator();

export const ServicesStackRouter = () => {
  return (
    <ScreenIdleHandlerProvider>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="ServicesView"
      >
        <Stack.Screen name="ServicesView" component={DuplicateScreen} />
      </Stack.Navigator>
    </ScreenIdleHandlerProvider>
  );
};

export default ServicesStackRouter;
