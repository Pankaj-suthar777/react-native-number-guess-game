import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../../constants/colors';

const InstructionText = ({children, style}) => {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instruction: {
    color: Colors.accent500,
    fontSize: 24,
  },
});

export default InstructionText;
