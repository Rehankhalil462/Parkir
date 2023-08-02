import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  Platform,
  TouchableOpacity,
  Modal,
} from "react-native";
import {
  useTheme,
  IconButton,
  Button,
  TextInput,
  Avatar,
} from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";
import * as ImagePicker from "expo-image-picker";
import { Dropdown } from "react-native-element-dropdown";

export const FillYourProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");
  const { colors } = useTheme();
  const [profilePicture, setProfilePicture] = useState();
  const [gender, setGender] = useState("");
  const [isGenderSelectFocused, setIsGenderSelectFocused] = useState(false);

  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (pickerResult.cancelled === true) {
      return;
    }
    console.log("image uri:", pickerResult);
    setProfilePicture({ localUri: pickerResult.uri });
  };

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
            Complete Your Profile
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
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <View>
              <Avatar.Image
                size={120}
                source={
                  profilePicture?.localUri
                    ? { uri: profilePicture.localUri }
                    : require("../../assets/logos/avatar.png")
                }
                style={{
                  backgroundColor: "transparent",

                  resizeMode: "contain",
                }}
              />

              <IconButton
                style={{
                  position: "absolute",
                  bottom: -8,
                  right: -8,
                  borderRadius: 12,
                }}
                onPress={openImagePickerAsync}
                iconColor="white"
                size={18}
                icon="pencil"
                containerColor={colors.primary}
              />
            </View>
          </View>

          <TextInput
            label="Full Name"
            theme={{ roundness: 12 }}
            textContentType="name"
            style={
              {
                // height: 60,
              }
            }
            autoCapitalize="words"
            mode="outlined"
            // error={}
            value={fullName}
            onChangeText={(fullName) => setFullName(fullName)}
          />
          <TextInput
            label="Nickname"
            theme={{ roundness: 12 }}
            textContentType="nickname"
            style={
              {
                // height: 60,
              }
            }
            mode="outlined"
            autoCapitalize="words"
            value={nickName}
            onChangeText={(nickName) => setNickName(nickName)}
          />
          <View>
            <Text
              style={{
                paddingLeft: 5,
                fontSize: 16,
                fontWeight: "600",
                color: "#616161",
              }}
            >
              Date of Birth
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                theme={{ roundness: 12 }}
                style={{
                  // height: 60,
                  width: 100,
                }}
                maxLength={2}
                mode="outlined"
                keyboardType="number-pad"
                placeholder="DD"
                enablesReturnKeyAutomatically={true}
                label="Day"
              />
              <TextInput
                theme={{ roundness: 12 }}
                style={{
                  width: 100,
                  // height: 60,
                }}
                mode="outlined"
                enablesReturnKeyAutomatically={true}
                maxLength={2}
                keyboardType="number-pad"
                placeholder="MM"
                label="Month"
              />
              <TextInput
                theme={{ roundness: 12 }}
                style={{
                  width: 150,
                  // height: 60,
                }}
                mode="outlined"
                enablesReturnKeyAutomatically={true}
                maxLength={4}
                keyboardType="number-pad"
                placeholder="YYYY"
                label="Year"
              />
            </View>
          </View>
          <TextInput
            label="Email"
            theme={{ roundness: 12 }}
            onChangeText={(email) => {
              setEmail(email);
            }}
            textContentType="emailAddress"
            mode="outlined"
            value={email}
            keyboardType="email-address"
            right={<TextInput.Icon icon="email" forceTextInputFocus={false} />}
          />
          <PhoneInput
            defaultCode="AE"
            layout="first"
            onChangeText={(phoneNumber) => {
              setPhoneNumber(phoneNumber);
            }}
            value={phoneNumber}
            onChangeFormattedText={(text) => {
              setFormattedPhoneNumber(text);
            }}
            containerStyle={{
              borderColor: "rgba(28,27,31,1)",
              borderWidth: 1,
              borderRadius: 12,
              width: "100%",
              height: 50,
              paddingBottom: 1,
            }}
            textContainerStyle={{
              borderRadius: 12,
              paddingVertical: 10,
            }}
          />
          <Dropdown
            style={[
              {
                borderRadius: 12,
                borderWidth: 1,
                height: 50,
                backgroundColor: colors.background,
                paddingRight: 8,
              },
              isGenderSelectFocused && { borderColor: colors.primary },
            ]}
            value={gender}
            containerStyle={{ borderRadius: 12 }}
            itemContainerStyle={{
              borderRadius: 12,
            }}
            onChange={(item) => {
              setGender(item.value);
              setIsGenderSelectFocused(false);
            }}
            data={[
              { value: 1, label: "Male" },
              { value: 2, label: "Female" },
            ]}
            placeholderStyle={{ paddingLeft: 16 }}
            selectedTextStyle={{ paddingLeft: 16 }}
            iconStyle={{ width: 30, height: 30 }}
            placeholder="Gender"
            onFocus={() => setIsGenderSelectFocused(true)}
            labelField="label"
            valueField="value"
          />
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
            mode="contained"
            // onPress={() => navigation.navigate("onboarding")}
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
