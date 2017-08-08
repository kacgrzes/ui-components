import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from '../../utils/CenterView'

import { Button } from './Button';
import { Label } from '../Label/Label';

storiesOf('Atoms/Button', module)
    .addDecorator(getStory =>
        <CenterView>
            {getStory()}
        </CenterView>
    )
    .add('with text', () =>
        <Button>
            <Label>Hello!</Label>
        </Button>
    )
    .add('with different text', () =>
        <Button>
            <Label>Hello world!</Label>
        </Button>
    )
    .add('with emoji', () =>
        <Button>
            <Label>😀 😎 👍 💯</Label>
        </Button>
    )
