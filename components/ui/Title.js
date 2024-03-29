import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 16,
  },
});

export default Title;
