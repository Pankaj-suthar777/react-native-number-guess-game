import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/colors';
import {Col} from 'antd';

const GuessLogItem = ({roundNumber, guess}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    width: '100%',
    elevation: 4,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});

export default GuessLogItem;
