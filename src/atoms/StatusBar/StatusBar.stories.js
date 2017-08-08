import React from 'react'

import { storiesOf } from '@storybook/react-native'
import CenterView from '../../utils/CenterView'
import TODO from '../../utils/TODO'

import { StatusBar } from './StatusBar';

storiesOf('Atoms/StatusBar', module)
  .addDecorator(getStory =>
    <CenterView>
      {getStory()}
    </CenterView>
  )
  .add('just status bar', () =>
    <TODO/>
  )
