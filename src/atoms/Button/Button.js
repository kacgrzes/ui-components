// @flow

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const Button = ({children}) => {
    return (
        <TouchableOpacity>
            <Text>{children}</Text>
        </TouchableOpacity>
    )
};

Button.propTypes = {

}