import { MD3LightTheme as DefaultTheme } from "react-native-paper";

export const theme = {
  lightTheme: {
    ...DefaultTheme,
    roundness: 30,
    version: 3,
    fonts: {
      ...DefaultTheme.fonts,
      medium: "Ubuntu Bold",
    },
    colors: {
      ...DefaultTheme.colors,
      primary: "#4D5DFA",
      secondary: "#EDEFFF",
      onBoardingBackground: "#E5E5E5",
      background: "#fafafa",
    },
  },
};
