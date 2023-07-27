import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabs from "./Screens/authScreens/Home";
import LoginScreen from "./Screens/authScreens/LoginScreen";
import RegistrationScreen from "./Screens/authScreens/RegistrationScreen";

const AuthStack = createStackNavigator();


export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          name="Home"
          component={HomeTabs}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    );
  }
  return <HomeTabs />;
};