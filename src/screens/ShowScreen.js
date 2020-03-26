import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {globalStyles} from './globalStyles'
import {Card, Avatar} from 'react-native-paper'
import BlogContext from '../context'
import { EvilIcons, Feather } from '@expo/vector-icons'

export default function Show({route, navigation}) {
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {blogPost})}>  
                <EvilIcons name="pencil" size={30} style={{marginRight: 20}}/>
            </TouchableOpacity>
        ),
    })
    const {data} = useContext(BlogContext)
    const {id} = route.params
    const blogPost = data.find(data => data.id === id)
    return (
        <View style={globalStyles.padder }>
            <Card style={globalStyles.cardder}>
            <Card.Title title="Blog" subtitle="Posted Feeds" left={(props) => <Feather {...props} name="home" />} />
            <Card.Content>
            <Text>Title: {blogPost.title}</Text>
            <Text>Content: {blogPost.content}</Text>
            </Card.Content>
            </Card>
        </View>
    )
}
