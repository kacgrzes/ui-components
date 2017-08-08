import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Separator = () => {
  return (
    <View style={styles.separator}/>
  )
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#D7D7D7'
  }
})

Separator.propTypes = {

}