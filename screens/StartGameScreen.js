import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Alert, Text} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

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
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card style={styles.inputContainer}>
        <InstructionText>Enter a number</InstructionText>
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
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
  btnContainer: {
    flexDirection: 'row',
  },

  numberInput: {
    height: 60,
    width: 60,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: 'bold',
    color: Colors.accent500,
  },
  oneBtn: {
    flex: 1,
  },
});

export default StartGameScreen;
