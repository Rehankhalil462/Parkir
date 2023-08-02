import React, { useState, useEffect } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LetsInScreen } from "./src/screens/LetsInScreen";
import { OnBoardingScreen } from "./src/screens/OnBoardingScreen";
import { WelcomeScreen } from "./src/screens/WelcomeScreen";
import { SignUpScreen } from "./src/screens/SignUpScreen";
import { theme } from "./src/styles/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignInScreen } from "./src/screens/SignInScreen";
import { FillYourProfileScreen } from "./src/screens/FillYourProfileScreen";
import { ForgotPasswordMethodScreen } from "./src/screens/FogotPasswordMethodScreen";
import { ForgotPasswordOTPScreen } from "./src/screens/ForgotPasswordOTPScreen";
import { CreateNewPasswordScreen } from "./src/screens/CreateNewPasswordScreen";
import { HomeScreen } from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAppFirstLaunched, setisAppFirstLaunched] = useState(false);
  useEffect(() => {
    try {
      const isFirstLaunched = AsyncStorage.getItem("launched");
      console.log("isFirstLaunched", isFirstLaunched);
      if (!isFirstLaunched) {
        setisAppFirstLaunched(true);
        AsyncStorage.setItem("launched", JSON.stringify("true"));
      } else {
        setisAppFirstLaunched(true);
      }
    } catch (error) {
      console.log("error", error);
    }
  }, [isAppFirstLaunched]);

  return (
    <NavigationContainer>
      <PaperProvider theme={theme.lightTheme}>
        <Stack.Navigator
          initialRouteName={isAppFirstLaunched ? "letsin" : "welcome"}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="welcome" component={WelcomeScreen} />

          <Stack.Screen name="onboarding" component={OnBoardingScreen} />

          <Stack.Group
            screenOptions={{
              animation: "slide_from_bottom",
              gestureDirection: "vertical",
            }}
          >
            <Stack.Screen name="letsin" component={LetsInScreen} />
            <Stack.Screen name="signup" component={SignUpScreen} />
            <Stack.Screen
              name="fillyourprofile"
              component={FillYourProfileScreen}
            />
            <Stack.Screen name="signin" component={SignInScreen} />
            <Stack.Screen
              name="forgotpasswordmethod"
              component={ForgotPasswordMethodScreen}
            />
            <Stack.Screen
              name="forgotpasswordotp"
              component={ForgotPasswordOTPScreen}
            />
            <Stack.Screen
              name="createnewpassword"
              component={CreateNewPasswordScreen}
            />
          </Stack.Group>
          <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
