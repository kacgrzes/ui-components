import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from '../../utils/CenterView'

import { Button } from './Button';

storiesOf('Atoms/Button', module)
    .addDecorator(getStory =>
        <CenterView>
            {getStory()}
        </CenterView>
    )
    .add('with text', () =>
        <Button>
            Hello!!
        </Button>
    )
    .add('with different text', () =>
        <Button>
            Hello world!
        </Button>
    )
    .add('with emoji', () =>
        <Button>
            😀 😎 👍 💯
        </Button>
    )
