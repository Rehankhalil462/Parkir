import React, { useState, useRef } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  StatusBar,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-paper";

import { useTheme } from "react-native-paper";
import { slides } from "../configs/OnBoardingScreenConfig";

const { width, height } = Dimensions.get("window");

export const OnBoardingScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  const Slide = ({ item }) => {
    return (
      <View style={{ alignItems: "center", paddingTop: 50, maxWidth: width }}>
        <Image
          source={item.image}
          style={{ height: 250, width: width }}
          resizeMode="contain"
        />
        <Text
          style={{
            marginTop: 38,
            fontSize: 32,
            maxWidth: "80%",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 16,
            maxWidth: "90%",
            fontWeight: "400",
            textAlign: "center",
            lineHeight: 22,
          }}
        >
          {item.subtitle}
        </Text>
      </View>
    );
  };
  const IndicatorContainer = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          height: height * 0.05,
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {
                backgroundColor: colors.primary,
                width: 32,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  const ButtonsContainer = () => {
    return (
      <View
        style={{
          height: height * 0.2,
          justifyContent: "flex-start",
          paddingHorizontal: 24,
        }}
      >
        {currentSlideIndex === slides.length - 1 ? (
          <View style={{ marginBottom: 10 }}>
            <Button
              style={{ paddingVertical: 10, paddingHorizontal: 10 }}
              mode="contained"
              onPress={() => navigation.navigate("letsin")}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "700", letterSpacing: 0.2 }}
              >
                Get Started
              </Text>
            </Button>
          </View>
        ) : (
          <View style={{ justifyContent: "space-around" }}>
            <Button
              style={{ paddingVertical: 10, paddingHorizontal: 10 }}
              mode="contained"
              onPress={goNextSlide}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  letterSpacing: 0.2,
                }}
              >
                Next
              </Text>
            </Button>
            <Button
              style={{
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginVertical: 10,
                backgroundColor: colors.secondary,
              }}
              onPress={skipSlides}
              mode="contained"
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  letterSpacing: 0.2,
                  color: colors.primary,
                }}
              >
                Skip
              </Text>
            </Button>
          </View>
        )}
      </View>
    );
  };

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  const skipSlides = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor={"#ffff"} barStyle="dark-content" />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ height: height * 0.75 }}
        renderItem={({ item }) => <Slide item={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <IndicatorContainer />
      <ButtonsContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  indicator: {
    height: 8,
    width: 8,
    borderRadius: 100,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 6,
  },
});
