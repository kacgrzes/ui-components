import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TODO = () => {
  return (
    <View style={styles.todo}>
      <Text style={styles.todoText}>TODO</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  todo: {
    backgroundColor: '#FF4C6B',
    padding: 5,
    borderRadius: 4
  },

  todoText: {
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 22
  }
})

export default TODO
