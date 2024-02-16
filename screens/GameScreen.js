import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
