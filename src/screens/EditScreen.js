import React from 'react'
import { View, Text, Button } from 'react-native'
import {globalStyles} from './globalStyles'
import { TextInput } from 'react-native-paper'
import BlogContext from '../context'

export default function EditScreen({route, navigation}) {
    const {blogPost} = route.params
    const { editBlogPost } = React.useContext(BlogContext)
    const [title, setTitle] = React.useState(blogPost.title)
    const [content, setContent] = React.useState(blogPost.content)
    return (
        <View style={globalStyles.container, globalStyles.padder, globalStyles.margins}>
            <TextInput mode="outlined" style={ globalStyles.margins} label="Title" value={title} onChangeText={e => setTitle(e)} />
            <TextInput mode="outlined" style={ globalStyles.margins} label="Content" value={content} onChangeText={e => setContent(e)} />
            <Button style={ globalStyles.margins} onPress={() => editBlogPost(blogPost.id, title, content, () => navigation.pop())} title="Save"/>
        </View>
    )
}
