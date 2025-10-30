import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Parent from "../../Screens/Auth/Parent";
import Teacher from "../../Screens/Auth/Teacher";
import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "../../Screens/Auth/SigninScreen";

const Top = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signin" component={SigninScreen}  ></Stack.Screen>
    </Stack.Navigator>
  )
}

export const TopTabNavigater = () => {
  return (
    <Top.Navigator>
      <Top.Screen name='Parent' component={Parent} options={{
        tabBarLabel: 'Parent',
        tabBarLabelStyle: { textTransform: 'nono', fontFamily: "BreeSerif-Regular" }
      }} />
      <Top.Screen name='Teacher' component={Teacher} options={{
        tabBarLabel: 'Teacher',
        tabBarLabelStyle: { textTransform: 'nono', fontFamily: "BreeSerif-Regular" }
      }} />
    </Top.Navigator>
  )
}