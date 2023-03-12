// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen name="Home" component={BottomTabNavigator} options={{
                headerShown: false,
            }}/> */}
    </Stack.Navigator>
  );
}
