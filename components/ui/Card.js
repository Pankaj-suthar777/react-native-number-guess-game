import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../constants/colors';

const Card = ({children}) => {
  return <View style={styles.card}>{children}</View>;
};
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 4,
  },
});
export default Card;
