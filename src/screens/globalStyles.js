import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff'
    },
    listHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderTopWidth: .5
    }, 
    padder: {margin: 10 },
    cardder: {
        paddingVertical: 40,
        paddingHorizontal: 10,
        elevation: 20
    },
    margins: {
        margin: 10
    }
})