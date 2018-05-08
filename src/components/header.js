// Import libraries for making a component
import React from 'react'
import { Text, View } from 'react-native'

// Make a component
const Header = () => {
    const { textStyle, viewStyle } = styles

    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>Albums!</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#27EC27',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}

// Make the component availble to the other parts of the app
export default Header

