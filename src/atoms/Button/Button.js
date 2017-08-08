// @flow

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = ({children}) => {
    return (
        <TouchableOpacity style={styles.button}>
            {children}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6A5AFF',
    borderRadius: 4,

    shadowOpacity: 0.2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2
    },

    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    width: 307
    // boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)'
  }
})

Button.propTypes = {

}