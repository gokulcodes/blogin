import React from 'react'
import {View, Text, Button} from 'react-native'
import {TextInput, DefaultTheme, Provider} from 'react-native-paper'
import {globalStyles} from './globalStyles'
import BlogContext from '../context'

const theme = {
    ...DefaultTheme,
    roundness: 3,
    color: {
        ...DefaultTheme.colors,
        primary: '#3498db'
    }
}

export default function createScreen(props) {
    const { addBlogPost } = React.useContext(BlogContext)
    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')
    return (
        <Provider theme={theme}>
        <View style={globalStyles.padder}>
            <Text style={{fontSize: 30}}>What's Happening? </Text>
            <TextInput 
                label="Title" 
                mode="outlined" 
                style={globalStyles.padder} 
                onChangeText={e => setTitle(e)} 
                value={title} />
            <TextInput 
                label="Content" 
                mode="outlined" 
                style={globalStyles.padder} 
                onChangeText={e => setContent(e)} 
                value={content}/>
            <Button 
                mode="contained" 
                onPress={() => 
                    {addBlogPost(title, content, () => 
                        {props.navigation.navigate('Index')});
                     }} 
                title="Add" />
        </View>
        </Provider>
    )
}
