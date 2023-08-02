import React from "react";
import { useTheme } from "react-native-paper";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Button } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
// import { LinearGradient } from "expo-linear-gradient";

export const WelcomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/onboarding/Welcome.png")}
      resizeMode="cover"
    >
      <View
        style={{
          position: "absolute",
          flex: 1,
          height: "50%",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(58,58,58,0.2)",
        }}
      ></View>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 2 }}>
        <View style={{ paddingHorizontal: 40 }}>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 40,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 48,
                fontWeight: "700",
                color: "white",
                marginRight: 10,
              }}
            >
              Welcome To
            </Text>
            <Text style={{ fontSize: 48 }}>👋</Text>
          </View>
          <Text
            style={{
              fontWeight: "900",
              fontSize: 96,
              color: "white",
              letterSpacing: 3,
            }}
          >
            Parkir
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              letterSpacing: 0.2,
              color: "white",
            }}
          >
            The best parking app of the century for all people in the world.
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            marginTop: 50,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            contentStyle={{
              height: 58,
              width: 170,
              backgroundColor: colors.primary,
            }}
            mode="contained"
            onPress={() => navigation.navigate("onboarding")}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "700", letterSpacing: 0.2 }}
            >
              English
            </Text>
          </Button>
          <Button
            contentStyle={{
              height: 58,
              width: 170,
              backgroundColor: colors.primary,
            }}
            mode="contained"
            elevation={5}
            onPress={() => navigation.navigate("onboarding")}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "700", letterSpacing: 0.2 }}
            >
              Arabic
            </Text>
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};
