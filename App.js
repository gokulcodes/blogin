import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import createScreen from './src/screens/createScreen'
import EditScreen from './src/screens/EditScreen'
import {BlogProvider} from './src/context'

const Stack = createStackNavigator()

export default function App() {
  return (
    <BlogProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" options={{ title: 'Blogs' }} component={IndexScreen} />
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Create" component={createScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </BlogProvider>
  );
}

