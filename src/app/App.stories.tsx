import React from 'react'
import {action} from '@storybook/addon-actions'
import App from './App'
<<<<<<< HEAD
import {BrowserRouterDecorator, ReduxStoreProviderDecorator} from '../stories/decorators/ReduxStoreProviderDecorator'
import StoryRouter from 'storybook-react-router';

export default {
    title: 'Application Stories',
    component: App,
    decorators: [ReduxStoreProviderDecorator, BrowserRouterDecorator]
=======
import {ReduxStoreProviderDecorator} from '../stories/decorators/ReduxStoreProviderDecorator'

export default {
    title: 'App Stories',
    component: App,
    decorators: [ReduxStoreProviderDecorator]
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
}

export const AppBaseExample = (props: any) => {
    return (<App demo={true} />)
}
