import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 16,
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    marging: 24,
    borderRadiius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default NumberContainer;
