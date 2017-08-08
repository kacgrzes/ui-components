import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from '../../utils/CenterView'

import { Separator } from './Separator';

storiesOf('Atoms/Separator', module)
    .addDecorator(getStory =>
        <CenterView>
            {getStory()}
        </CenterView>
    )
    .add('just full width separator', () =>
        <Separator/>
    )
