import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';

const PrimaryButton = ({children, onPress}) => {
  function pressHandler() {}
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{color: '#640233'}}
        style={styles.btnInnerContainer}>
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  btnInnerContainer: {
    backgroundColor: '#72063c',
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default PrimaryButton;
