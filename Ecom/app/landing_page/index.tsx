import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Platform,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import LandingImageSrc from "../../assets/LandingImage.png";
import { calcHeight, calcTextSize, calcWidth } from "../../utility/res";
import * as Progress from "react-native-progress";
import { PRIMARY_COLOR } from "../comman/color";
import { router, Router, Stack } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
const LandingPage = () => {
  const user = useSelector((state: RootState) => state.user.value);

  useEffect(() => {
    setTimeout(() => {
      console.log(Platform.OS, user);
      if (user?.token) {
        router.replace("../home_page");
        return;
      }
      router.replace("../phone_auth");
    }, 6000);
  }, []);
  return (
    <View style={style.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ImageBackground style={style.background} source={LandingImageSrc}>
        <View style={style.bottomContainer}>
          <Text style={style.title}>Zyra</Text>
          <Progress.CircleSnail
            thickness={4}
            size={calcWidth(10)}
            color={[PRIMARY_COLOR]}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: calcTextSize(20),
    fontFamily: "Lato_900Black",
    color: "white",
  },
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  bottomContainer: {
    width: "100%",
    position: "absolute",
    bottom: calcHeight(5),
    display: "flex",
    alignItems: "center",
    gap: calcHeight(10),
  },
  
});

export default LandingPage;
