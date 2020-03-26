import React from 'react'
import { View, Text, Button } from 'react-native'
import {globalStyles} from './globalStyles'


export default function Home(props) {
    return (
        <View style={globalStyles.container}>
            <Text>Home</Text>
            <Button onPress={() => props.navigation.navigate('Index')} title="Index"/>
        </View>
    )
}
