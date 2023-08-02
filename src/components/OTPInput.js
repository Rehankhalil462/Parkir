import React, { useRef, useState, useEffect } from "react";
import { View, Text, Pressable, Keyboard } from "react-native";
import { TextInput } from "react-native-paper";
import { useTheme } from "react-native-paper";

export const OTPInput = ({ code, setCode, maximumLength, setIsPinReady }) => {
  const { colors } = useTheme();
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const boxArray = new Array(maximumLength).fill(0);

  const inputRef = useRef();

  const boxDigit = (_, index) => {
    const emptyInput = "";
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);
    return (
      <View
        style={[
          {
            borderWidth: 2,
            borderRadius: 12,
            borderColor: "#eeeeee",
            paddingVertical: 14,

            width: 80,
            height: 64,
          },
          isValueFocused &&
            isInputBoxFocused && {
              borderColor: colors.primary,
              backgroundColor: "#4D5DFA10",
            },
        ]}
        key={index}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            textAlign: "center",
            color: "#212121",
          }}
        >
          {digit}
        </Text>
      </View>
    );
  };

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    // update pin ready status
    setIsPinReady(code.length === maximumLength);
    if (code.length === maximumLength) {
      Keyboard.dismiss();
    }
    // clean up function
    return () => {
      setIsPinReady(false);
    };
  }, [code]);

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Pressable
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        onPress={handleOnPress}
      >
        {boxArray.map(boxDigit)}
      </Pressable>
      <TextInput
        keyboardType="number-pad"
        mode="outlined"
        value={code}
        textContentType="oneTimeCode"
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
        style={{
          //   width: 300,
          //   borderColor: "#e5e5e5",
          //   borderWidth: 1,
          //   borderRadius: 5,
          //   padding: 15,

          position: "absolute",
          opacity: 0,
        }}
      ></TextInput>
    </View>
  );
};
