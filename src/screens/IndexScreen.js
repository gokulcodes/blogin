import React, {useContext} from 'react'
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import {globalStyles} from './globalStyles'
import BlogContext from '../context'
import {Feather} from '@expo/vector-icons'
import { Card } from 'react-native-paper'

export default function IndexScreen(props) {
    const { data, deleteBlogPost, getBlogPost} = useContext(BlogContext)
    React.useEffect(() => {
        getBlogPost();
    })
    props.navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={() => props.navigation.navigate('Create')}>  
                <Feather name="plus" size={25} style={{marginRight: 20}}/>
            </TouchableOpacity>
        ),
      });

    if(data.length === 0){
        return <View style={globalStyles.container, globalStyles.padder}>
            <Text>Add blogs</Text>
        </View> 
    }else{
        return (
            <View style={globalStyles.container, globalStyles.padder} style={{flex: 1}}>
                <FlatList data={data} keyExtractor={data => data.id.toString()} renderItem={({item}) => {
                    return (
                        <Card style={globalStyles.cardder}>
                        <Card.Title title="Blog" subtitle={`Post Number:${item.id}` } left={(props) => <Feather {...props} name="home" />} />
                        <Card.Content>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Show', {id: item.id})}>
                        <View style={globalStyles.listHolder}>
                            <Text>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather style={{fontSize: 25}} name="trash"/>
                            </TouchableOpacity>
                        </View>
                </TouchableOpacity>
                 </Card.Content>
                </Card>
                    )
                }} />
            </View>
        )

    }
}
