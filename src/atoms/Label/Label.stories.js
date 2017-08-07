import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from '../../utils/CenterView'

import { Label } from './Label';

storiesOf('Atoms/Label', module)
    .addDecorator(getStory =>
        <CenterView>
            {getStory()}
        </CenterView>
    )
    .add('with text', () =>
        <Label>
          Hello!!
        </Label>
    )
    .add('with different text', () =>
        <Label>
          Hello world!
        </Label>
    )
    .add('with emoji', () =>
        <Label>
          😀 😎 👍 💯
        </Label>
    )
