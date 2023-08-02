import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Keyboard,
  Image,
} from "react-native";
import {
  useTheme,
  IconButton,
  Button,
  TextInput,
  Checkbox,
} from "react-native-paper";

import AwesomeAlert from "react-native-awesome-alerts";

export const CreateNewPasswordScreen = ({ route, navigation }) => {
  const { colors } = useTheme();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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
            alignItems: "center",
            flexDirection: "row",
            paddingTop: StatusBar.currentHeight ? 30 : 20,
          }}
        >
          <IconButton
            icon="keyboard-backspace"
            size={34}
            iconColor="#000"
            onPress={() => navigation.goBack()}
            style={{
              padding: 0,
            }}
          />
          <Text style={{ fontSize: 24, fontWeight: "700" }}>
            Create New Password
          </Text>
        </View>

        <View
          onPress={Keyboard.dismiss}
          style={{
            flex: 4,
            paddingHorizontal: 24,

            width: "100%",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 1.5,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/illustrations/createnewpassword.png")}
              resizeMode="contain"
              style={{ height: 200, width: 200 }}
            />
          </View>
          <AwesomeAlert
            show={showAlert}
            contentContainerStyle={{ width: "90%", borderRadius: 24 }}
            customView={
              <View style={{ alignItems: "center" }}>
                <Image
                  resizeMode="contain"
                  source={require("../../assets/logos/alertlogo.png")}
                />
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "700",
                    color: colors.primary,
                    marginTop: 32,
                    textAlign: "center",
                  }}
                >
                  Congratulations!
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    marginTop: 16,
                    textAlign: "center",
                  }}
                >
                  Your account is ready to use
                </Text>
              </View>
            }
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="Go to Homepage"
            confirmButtonColor={colors.primary}
            confirmButtonStyle={{
              borderRadius: 100,
              paddingHorizontal: 16,
              paddingVertical: 18,
              width: "80%",
              alignItems: "center",
              marginBottom: 30,
            }}
            confirmButtonTextStyle={{ fontSize: 16, fontWeight: "700" }}
            onConfirmPressed={() => {
              setShowAlert(false);
              navigation.reset({
                index: 0,
                routes: [{ name: "home" }],
              });
            }}
          />
          <View
            style={{
              flex: 2.5,
              justifyContent: "flex-start",
              paddingTop: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 16,
                color: "#212121",
              }}
            >
              Create Your New Password
            </Text>
            {/* <View style={{ justifyContent: "space-evenly" }}> */}
            <TextInput
              label="Password"
              value={password}
              textContentType="newPassword"
              secureTextEntry={passwordVisible}
              mode="outlined"
              style={{
                height: 60,
                marginTop: 24,
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
                  icon={passwordVisible ? "eye-off" : "eye"}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
              onChangeText={(password) => setPassword(password)}
            />
            <TextInput
              label="Confirm Password"
              value={confirmPassword}
              textContentType="newPassword"
              secureTextEntry={confirmPasswordVisible}
              mode="outlined"
              style={{
                height: 60,
                marginTop: 24,
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
                  icon={confirmPasswordVisible ? "eye-off" : "eye"}
                  onPress={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                />
              }
              onChangeText={(password) => setConfirmPassword(password)}
            />
            {/* </View> */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 24,
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
          </View>
        </View>

        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            paddingHorizontal: 24,
          }}
        >
          <Button
            contentStyle={{
              height: 60,
              width: "100%",
            }}
            disabled={
              !(
                password.length !== 0 &&
                confirmPassword.length !== 0 &&
                password === confirmPassword
              )
            }
            mode="contained"
            onPress={() => setShowAlert(true)}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "700", letterSpacing: 0.2 }}
            >
              Continue
            </Text>
          </Button>
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
