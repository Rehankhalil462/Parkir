import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useTheme, IconButton } from "react-native-paper";

export const LetsInScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            width: "100%",

            paddingLeft: 10,
          }}
        >
          <IconButton
            icon="keyboard-backspace"
            size={34}
            iconColor="#000"
            onPress={() => navigation.navigate("onboarding")}
            style={{
              padding: 0,
              margin: 0,
              marginTop: StatusBar.currentHeight ? 30 : 20,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            paddingHorizontal: 24,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 48, letterSpacing: 1.5 }}>
            Let's you in
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 24,
            flex: 2.5,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ justifyContent: "space-between", flex: 1 }}>
            <Button
              contentStyle={{
                height: 60,

                backgroundColor: "#EEEEEE",
              }}
              icon={({ size, color, direction }) => (
                <Image
                  source={require("../../assets/logos/facebooklogo.png")}
                  style={[
                    {
                      transform: [{ scaleX: direction === "rtl" ? -1 : 1 }],
                    },
                    {
                      width: 24,
                      height: 24,
                      // tintColor: color,
                    },
                  ]}
                />
              )}
              textColor="#212121"
              mode="contained"
              onPress={() => navigation.navigate("signin")}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "700", letterSpacing: 0.2 }}
              >
                Continue with Facebook
              </Text>
            </Button>
            <Button
              contentStyle={{
                height: 60,
                width: "100%",
                backgroundColor: "#EEEEEE",
              }}
              icon={({ size, color, direction }) => (
                <Image
                  source={require("../../assets/logos/googlelogo.png")}
                  style={[
                    {
                      transform: [{ scaleX: direction === "rtl" ? -1 : 1 }],
                    },
                    {
                      width: 24,
                      height: 24,
                      // tintColor: color,
                    },
                  ]}
                />
              )}
              textColor="#212121"
              mode="contained"
              onPress={() => navigation.navigate("signin")}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "700", letterSpacing: 0.2 }}
              >
                Continue with Google
              </Text>
            </Button>
            <Button
              contentStyle={{
                height: 60,
                width: "100%",
                backgroundColor: "#EEEEEE",
              }}
              icon={({ size, color, direction }) => (
                <Image
                  source={require("../../assets/logos/applelogo.png")}
                  style={[
                    {
                      transform: [{ scaleX: direction === "rtl" ? -1 : 1 }],
                    },
                    {
                      width: 24,
                      height: 24,
                      // tintColor: color,
                    },
                  ]}
                />
              )}
              textColor="#212121"
              mode="contained"
              onPress={() => navigation.navigate("signin")}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "700", letterSpacing: 0.2 }}
              >
                Continue with Apple
              </Text>
            </Button>
          </View>
          <View
            style={{ flexDirection: "row", flex: 0.5, alignItems: "center" }}
          >
            <View
              style={{
                backgroundColor: "#C8C8C8",
                height: 1,
                flex: 1,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                paddingHorizontal: 5,
                fontSize: 18,
                fontWeight: "600",
                color: "#616161",
              }}
            >
              or
            </Text>
            <View
              style={{
                backgroundColor: "#C8C8C8",
                height: 1,
                flex: 1,
                alignSelf: "center",
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1.5,
            width: "100%",
            justifyContent: "flex-start",

            paddingHorizontal: 24,
          }}
        >
          <Button
            contentStyle={{
              height: 60,
              width: "100%",
            }}
            mode="contained"
            onPress={() => navigation.navigate("signin")}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "700", letterSpacing: 0.2 }}
            >
              Sign in with Email
            </Text>
          </Button>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#9E9E9E",
                marginRight: 10,
                fontWeight: "400",
              }}
            >
              Don't have an account?
            </Text>
            <Text
              style={{
                color: colors.primary,
                fontWeight: "600",
                textDecorationLine: "underline",
              }}
              onPress={() => navigation.navigate("signup")}
            >
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
