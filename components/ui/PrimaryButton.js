import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const PrimaryButton = ({children, onPress}) => {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: Colors.primary600}}
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
    backgroundColor: Colors.primary500,
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
