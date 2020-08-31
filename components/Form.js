import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import { useSelector, useDispatch } from 'react-redux';

function calcAction(height, weight) {
  return { type: 'CALCULATE', height, weight };
}

export default function Form() {
  const [heightInput, onHeightChangeText] = React.useState('');
  const [weightInput, onWeightChangeText] = React.useState('');

  const num = useSelector((state) => state);
  const dispatch = useDispatch();

  function calc() {
    dispatch(calcAction(heightInput, weightInput));
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Weight"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onWeightChangeText(text)}
        value={weightInput}
      />
      <TextInput
        placeholder="Height"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onHeightChangeText(text)}
        value={heightInput}
      />

      <h1>BMI:</h1>
      <h1>{num.toFixed(1)}</h1>
      <Button
        onPress={calc}
        title="Run"
        color="red"
        accessibilityLabel="Click this button to increase count"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
