// Place code in here for iOS


// Import a library to help create a component
import React from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

// Attempt to create a component
const App = () =>  (
    <View style= {{ flex: 1 }}>
        <Header headerText={'Albums'}/>
        <AlbumList /> 
    </View>
)

// Attempt to render to the device
AppRegistry.registerComponent('practice', () => App)
