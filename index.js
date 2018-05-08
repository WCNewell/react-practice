// Place code in here for iOS


// Import a library to help create a component
import React from 'react'
import { AppRegistry } from 'react-native'
import Header from './src/components/header'

// Attempt to create a component
const App = () =>  (
    <Header />
)

// Attempt to render to the device
AppRegistry.registerComponent('practice', () => App)
