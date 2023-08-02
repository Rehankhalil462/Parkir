import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { useTheme, IconButton, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";

export const ForgotPasswordMethodScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const [chosenMethod, setChosenMethod] = useState("");

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

        <View
          style={{
            flex: 4,
            paddingHorizontal: 24,
            width: "100%",
            justifyContent: "space-between",
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
              source={require("../../assets/illustrations/forgotpassword.png")}
              resizeMode="contain"
              style={{ height: 180, width: 180 }}
            />
          </View>
          <View style={{ flex: 3, justifyContent: "space-between" }}>
            <Text style={{ fontSize: 16, fontWeight: "400", paddingTop: 5 }}>
              Select which contact details should we use to reset your password
            </Text>
            <TouchableOpacity
              onPress={() => setChosenMethod("SMS")}
              style={[
                {
                  borderRadius: 20,

                  borderColor: "#EEEEEE",
                  borderWidth: 1,
                  padding: 18,
                  flexDirection: "row",
                  alignItems: "center",
                },
                chosenMethod === "SMS" && {
                  borderColor: colors.primary,
                  borderWidth: 3,
                  padding: 16,
                },
              ]}
            >
              <View
                style={{
                  backgroundColor: "#4d5dfa20",
                  padding: 16,
                  borderRadius: 100,
                }}
              >
                <IconButton
                  icon="message-processing-outline"
                  iconColor={colors.primary}
                  size={36}
                />
              </View>

              <View style={{ marginLeft: 20 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    letterSpacing: 0.2,
                    color: "#757575",
                  }}
                >
                  via SMS:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "#212121",
                    letterSpacing: 0.2,
                  }}
                >
                  +1 111 ******99
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setChosenMethod("Email")}
              style={[
                {
                  borderRadius: 20,

                  borderColor: "#EEEEEE",
                  borderWidth: 1,
                  padding: 18,
                  flexDirection: "row",
                  alignItems: "center",
                },
                chosenMethod === "Email" && {
                  borderColor: colors.primary,
                  borderWidth: 3,
                  padding: 16,
                },
              ]}
            >
              <View
                style={{
                  backgroundColor: "#4d5dfa20",
                  padding: 16,
                  borderRadius: 100,
                }}
              >
                <IconButton icon="email" iconColor={colors.primary} size={36} />
              </View>

              <View style={{ marginLeft: 20 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    letterSpacing: 0.2,
                    color: "#757575",
                  }}
                >
                  via Email:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "#212121",
                    letterSpacing: 0.2,
                  }}
                >
                  and***ey@yourdomain.com
                </Text>
              </View>
            </TouchableOpacity>
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
            disabled={chosenMethod === "" ? true : false}
            // disabled={true}
            mode="contained"
            onPress={() =>
              navigation.navigate("forgotpasswordotp", {
                chosenMethod:
                  chosenMethod === "Email"
                    ? "and***ey@yourdomain.com"
                    : "+1 111 ******99",
              })
            }
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
