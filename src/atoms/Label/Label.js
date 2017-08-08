import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Label = ({children}) => {
  return (
    <Text style={styles.label}>{children}</Text>
  )
};

const styles = StyleSheet.create({
  label: {
    lineHeight: 17,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
    color: '#ffffff'
  }
})

Label.propTypes = {

}