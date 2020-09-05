import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import Constants from "expo-constants";
import { useSelector, useDispatch } from "react-redux";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function BmiDisplay() {
  const [barColor, setbarColor] = React.useState("white");

  const bmi = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeBarColor = () => {
    if (bmi < 18.6) setbarColor("red");
    if (bmi > 18.5 && bmi < 25) setbarColor("green");
    if (bmi > 25 && bmi < 30) setbarColor("orange");
    if (bmi >= 30) setbarColor("red");
  };

  useEffect(() => {
    changeBarColor();
  }, [bmi]);

  if (bmi > 0) {
    return (
      <View style={styles.container}>
        <h1>Your body mass index is:</h1>
        <AnimatedCircularProgress
          size={180}
          width={15}
          fill={bmi * 2}
          tintColor={barColor}
          backgroundColor="white"
          rotation={360}
          duration={1000}
        >
          {(fill) => <Text>{bmi.toFixed(1)}</Text>}
        </AnimatedCircularProgress>
      </View>
    );
  } else return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
