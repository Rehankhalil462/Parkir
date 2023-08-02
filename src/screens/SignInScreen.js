import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import {
  useTheme,
  IconButton,
  Button,
  TextInput,
  Checkbox,
} from "react-native-paper";

export const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

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
            flex: 0.5,
            justifyContent: "flex-start",
            width: "100%",
            paddingLeft: 10,
          }}
        >
          <IconButton
            icon="keyboard-backspace"
            size={34}
            iconColor="#000"
            onPress={() => navigation.goBack()}
            style={{
              padding: 0,

              marginTop: StatusBar.currentHeight ? 30 : 20,
            }}
          />
        </View>
        <View
          style={{
            flex: 1.5,
            justifyContent: "center",
            width: "100%",
            paddingHorizontal: 24,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 48, letterSpacing: 1.5 }}>
            Login to your Account
          </Text>
        </View>
        <View
          style={{
            flex: 4,
            paddingHorizontal: 24,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1, justifyContent: "space-around" }}>
            <TextInput
              label="Email"
              theme={{ roundness: 12 }}
              style={{
                height: 60,
              }}
              mode="outlined"
              textContentType="emailAddress"
              value={email}
              left={
                <TextInput.Icon
                  style={{ marginTop: 10 }}
                  icon="email"
                  forceTextInputFocus={false}
                />
              }
              onChangeText={(email) => setEmail(email)}
            />
            <TextInput
              label="Password"
              value={password}
              secureTextEntry={passwordVisible}
              mode="outlined"
              textContentType="password"
              style={{
                height: 60,
              }}
              theme={{ roundness: 12 }}
              left={
                <TextInput.Icon
                  style={{ marginTop: 10 }}
                  icon="lock"
                  forceTextInputFocus={false}
                />
              }
              right={
                <TextInput.Icon
                  style={{ marginTop: 10 }}
                  forceTextInputFocus={false}
                  icon={passwordVisible ? "eye" : "eye-off"}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
              onChangeText={(password) => setPassword(password)}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Checkbox.Android
                status={rememberMe ? "checked" : "unchecked"}
                onPress={() => {
                  setRememberMe(!rememberMe);
                }}
                uncheckedColor={colors.primary}
                theme={{ roundness: 8 }}
              />
              <Text
                style={{ fontWeight: "600", fontSize: 14, letterSpacing: 1 }}
              >
                Remember me
              </Text>
            </View>
            <Button
              contentStyle={{
                height: 60,
                width: "100%",
              }}
              mode="contained"
              // onPress={() => navigation.navigate("fillyourprofile")}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "600", letterSpacing: 0.2 }}
              >
                Sign In
              </Text>
            </Button>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: colors.primary,
                  fontWeight: "600",
                  textDecorationLine: "underline",
                  fontSize: 16,
                }}
                onPress={() => navigation.navigate("forgotpasswordmethod")}
              >
                Forgot the password?
              </Text>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", flex: 0.3, alignItems: "center" }}
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
              or continue with
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
            flex: 1,
            width: "100%",

            paddingHorizontal: 24,
          }}
        >
          <View
            style={{
              flex: 0.5,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              style={{
                borderColor: colors.background,
                borderWidth: 2,
                height: 60,
                width: 88,
              }}
              icon={({ size, color, direction }) => (
                <Image
                  style={[
                    {
                      transform: [{ scaleX: direction === "rtl" ? -1 : 1 }],
                    },
                    {
                      width: 30,
                      height: 30,
                      // tintColor: color,
                    },
                  ]}
                  source={require("../../assets/logos/facebooklogo.png")}
                />
              )}
            />
            <IconButton
              style={{
                borderColor: colors.background,
                borderWidth: 2,
                height: 60,
                width: 88,
              }}
              icon={({ size, color, direction }) => (
                <Image
                  style={[
                    {
                      transform: [{ scaleX: direction === "rtl" ? -1 : 1 }],
                    },
                    {
                      width: 30,
                      height: 30,
                      // tintColor: color,
                    },
                  ]}
                  source={require("../../assets/logos/googlelogo.png")}
                />
              )}
            />
            <IconButton
              style={{
                borderColor: colors.background,
                borderWidth: 2,
                height: 60,
                width: 88,
              }}
              icon={({ size, color, direction }) => (
                <Image
                  style={[
                    {
                      transform: [{ scaleX: direction === "rtl" ? -1 : 1 }],
                    },
                    {
                      width: 30,
                      height: 30,
                      // tintColor: color,
                    },
                  ]}
                  source={require("../../assets/logos/applelogo.png")}
                />
              )}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: 30,
              flex: 0.5,
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
