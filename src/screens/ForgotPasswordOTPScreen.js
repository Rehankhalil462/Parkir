import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Keyboard,
  Pressable,
} from "react-native";
import { useTheme, IconButton, Button } from "react-native-paper";
import { OTPInput } from "../components/OTPInput";

export const ForgotPasswordOTPScreen = ({ route, navigation }) => {
  const { colors } = useTheme();
  const [seconds, setSeconds] = useState(60);
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;

  useEffect(() => {
    setTimeout(() => {
      if (seconds > 0) {
        setSeconds((prevstate) => prevstate - 1);
      }
    }, 1000);
  }, [seconds]);

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
            Forgot Password
          </Text>
        </View>

        <Pressable
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
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "400" }}>
              Code has been sent to {route.params.chosenMethod}
            </Text>
          </View>
          <View style={{ marginTop: 40 }}>
            <OTPInput
              code={otpCode}
              setCode={setOTPCode}
              maximumLength={maximumCodeLength}
              setIsPinReady={setIsPinReady}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            {seconds === 0 ? (
              <Button onPress={() => setSeconds(60)} mode="contained">
                Resend Code
              </Button>
            ) : (
              <Text style={{ fontSize: 16, fontWeight: "400" }}>
                Resend code in
                <Text style={{ color: colors.primary, fontSize: 16 }}>
                  {` ${seconds} `}
                </Text>
                s
              </Text>
            )}
          </View>
        </Pressable>

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
            disabled={!isPinReady}
            mode="contained"
            onPress={() => navigation.navigate("createnewpassword")}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "700", letterSpacing: 0.2 }}
            >
              Verify
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
