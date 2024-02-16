import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredtext) {
    setEnteredNumber(enteredtext);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chooseNumber = parseInt(enteredNumber);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      //show alret
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 to 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    onPickNumber(chooseNumber);
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
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.oneBtn}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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
