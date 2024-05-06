import ScreenIdleHandlerProvider from "@/common/providers/screen-idle-handler.provider";
import { DuplicateScreen } from "@/modules/duplicate";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
