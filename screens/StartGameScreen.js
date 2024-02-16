import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredtext) {
    setEnteredNumber(enteredtext);
  }

  function confirminputHandler(enteredtext) {
    setEnteredNumber(enteredtext);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.btnContainer}>
        <View style={styles.oneBtn}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.oneBtn}>
          <PrimaryButton onPress={confirminputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    backgroundColor: '#3b021f',
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 4,
  },
  numberInput: {
    height: 60,
    width: 60,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: 'bold',
    color: '#ddb52f',
  },
  oneBtn: {
    flex: 1,
  },
});

export default StartGameScreen;
