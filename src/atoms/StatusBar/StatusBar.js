import React from 'react';
import { StatusBar as RNStatusBar } from 'react-native';

export const StatusBar = ({backgroundColor='#6A5AFF', barStyle='light-content'}) =>
  <RNStatusBar
    backgroundColor={backgroundColor}
    barStyle={barStyle}
  />
